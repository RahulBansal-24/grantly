import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const targets = [
  path.resolve('frontend/public'),
  path.resolve('public')
].filter(d => fs.existsSync(d) || d.includes('frontend'));

targets.forEach(outDir => {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
});

const outDir = targets[0];

// Generate high-fidelity PWA & Apple Touch PNG icons matching favicon.svg
const psScript = `
Add-Type -AssemblyName System.Drawing

function Render-GrantlyIcon([int]$size, [string]$outPath) {
    $bmp = New-Object System.Drawing.Bitmap $size, $size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

    $scale = $size / 512.0

    # 1. Background Rounded Rect with Linear Gradient
    $gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.PointF 0, 0),
        (New-Object System.Drawing.PointF $size, $size),
        [System.Drawing.Color]::FromArgb(255, 79, 70, 229),
        [System.Drawing.Color]::FromArgb(255, 11, 29, 58)
    )
    $cb = New-Object System.Drawing.Drawing2D.ColorBlend 3
    $cb.Colors = @(
        [System.Drawing.Color]::FromArgb(255, 79, 70, 229),
        [System.Drawing.Color]::FromArgb(255, 99, 102, 241),
        [System.Drawing.Color]::FromArgb(255, 11, 29, 58)
    )
    $cb.Positions = @(0.0, 0.5, 1.0)
    $gradBrush.InterpolationColors = $cb

    $radius = 128.0 * $scale
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $d = $radius * 2
    $path.AddArc(0, 0, $d, $d, 180, 90)
    $path.AddArc(($size - $d), 0, $d, $d, 270, 90)
    $path.AddArc(($size - $d), ($size - $d), $d, $d, 0, 90)
    $path.AddArc(0, ($size - $d), $d, $d, 90, 90)
    $path.CloseFigure()
    $g.FillPath($gradBrush, $path)

    # 2. Mortarboard base
    $basePath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $baseBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 238, 242, 255))
    $basePath.StartFigure()
    $basePath.AddLine((140 * $scale), (230 * $scale), (140 * $scale), (310 * $scale))
    $basePath.AddBezier((140 * $scale), (310 * $scale), (140 * $scale), (370 * $scale), (372 * $scale), (370 * $scale), (372 * $scale), (310 * $scale))
    $basePath.AddLine((372 * $scale), (310 * $scale), (372 * $scale), (230 * $scale))
    $basePath.AddLine((372 * $scale), (230 * $scale), (256 * $scale), (290 * $scale))
    $basePath.CloseFigure()
    $g.FillPath($baseBrush, $basePath)

    # 3. Cap Top Polygon
    $pts = @(
        (New-Object System.Drawing.PointF (256 * $scale), (110 * $scale)),
        (New-Object System.Drawing.PointF (410 * $scale), (190 * $scale)),
        (New-Object System.Drawing.PointF (256 * $scale), (270 * $scale)),
        (New-Object System.Drawing.PointF (102 * $scale), (190 * $scale))
    )
    $topBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(242, 255, 255, 255))
    $g.FillPolygon($topBrush, $pts)

    # 4. Gold tassel
    $goldBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.PointF (390 * $scale), (205 * $scale)),
        (New-Object System.Drawing.PointF (400 * $scale), (340 * $scale)),
        [System.Drawing.Color]::FromArgb(255, 252, 211, 77),
        [System.Drawing.Color]::FromArgb(255, 245, 158, 11)
    )
    $tasselPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $tasselPath.StartFigure()
    $tasselPath.AddLine((390 * $scale), (205 * $scale), (390 * $scale), (330 * $scale))
    $tasselPath.AddBezier((390 * $scale), (330 * $scale), (390 * $scale), (340 * $scale), (400 * $scale), (340 * $scale), (400 * $scale), (330 * $scale))
    $tasselPath.AddLine((400 * $scale), (330 * $scale), (400 * $scale), (210 * $scale))
    $tasselPath.CloseFigure()
    $g.FillPath($goldBrush, $tasselPath)
    $g.FillEllipse($goldBrush, (386 * $scale), (322 * $scale), (28 * $scale), (28 * $scale))

    # 5. Cap Center Button
    $btnBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 79, 70, 229))
    $g.FillEllipse($btnBrush, ((256 - 16) * $scale), ((190 - 16) * $scale), (32 * $scale), (32 * $scale))

    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Render-GrantlyIcon 512 "${path.join(outDir, 'pwa-512x512.png').replace(/\\/g, '\\\\')}"
Render-GrantlyIcon 192 "${path.join(outDir, 'pwa-192x192.png').replace(/\\/g, '\\\\')}"
Render-GrantlyIcon 180 "${path.join(outDir, 'apple-touch-icon.png').replace(/\\/g, '\\\\')}"
`;

try {
  execSync(`powershell -NoProfile -Command "${psScript.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
  console.log('Official Grantly graduation cap PWA icons successfully generated in public/');
} catch (e) {
  console.error('Failed to generate icons via PowerShell:', e);
}
