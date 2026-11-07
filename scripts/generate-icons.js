import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPng(width, height, r, g, b, a = 255) {
  // Simple solid/gradient PNG generator
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth 8
  ihdr.writeUInt8(6, 9); // color type 6: RGBA
  ihdr.writeUInt8(0, 10); // compression 0
  ihdr.writeUInt8(0, 11); // filter 0
  ihdr.writeUInt8(0, 12); // interlace 0

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const body = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(calcCrc(body), 0);
    return Buffer.concat([len, body, crc]);
  }

  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }
  function calcCrc(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  // Raw pixel data: each scanline starts with filter byte 0
  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(scanlineLength * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter 0 (None)
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      // Add gradient from deep navy (11, 29, 58) to brand indigo (99, 102, 241)
      const factor = (x + y) / (width + height);
      const pr = Math.round(11 + (79 - 11) * factor);
      const pg = Math.round(29 + (70 - 29) * factor);
      const pb = Math.round(58 + (229 - 58) * factor);

      // Inner icon shape check: graduation cap diamond
      const cx = width / 2;
      const cy = height / 2;
      const dx = Math.abs(x - cx) / (width * 0.35);
      const dy = Math.abs(y - cy) / (height * 0.25);
      const isDiamond = (dx + dy) <= 1.0;

      if (isDiamond) {
        rawData[pxOffset] = 255;
        rawData[pxOffset + 1] = 255;
        rawData[pxOffset + 2] = 255;
        rawData[pxOffset + 3] = 240;
      } else {
        rawData[pxOffset] = pr;
        rawData[pxOffset + 1] = pg;
        rawData[pxOffset + 2] = pb;
        rawData[pxOffset + 3] = a;
      }
    }
  }

  const idatData = zlib.deflateSync(rawData);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), createPng(192, 192, 11, 29, 58));
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), createPng(512, 512, 11, 29, 58));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), createPng(180, 180, 11, 29, 58));
console.log('Icons successfully created in public/');
