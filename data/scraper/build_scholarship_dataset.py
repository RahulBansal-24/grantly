#!/usr/bin/env python3
"""
GRANTLY — Web-Sourced Scholarship Dataset Generator & Collector
Constructs, verifies, validates, and deduplicates a comprehensive scholarship dataset
spanning Indian Central, State, Corporate CSR, Foundation, University, and International Fellowships.
"""

import json
import re
import os
import hashlib
from datetime import datetime, date

CURRENT_DATE_STR = "2026-11-07"
CURRENT_DATE = datetime.strptime(CURRENT_DATE_STR, "%Y-%m-%d").date()

def normalize_text(text: str) -> str:
    """Normalize text for deduplication matching."""
    if not text:
        return ""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text)
    return text

def calculate_checksum(record: dict) -> str:
    """Calculate unique hash signature for deduplication."""
    norm_name = normalize_text(record.get('name', ''))
    norm_provider = normalize_text(record.get('provider', ''))
    country = normalize_text(record.get('country', 'india'))
    key = f"{norm_name}|{norm_provider}|{country}"
    return hashlib.sha256(key.encode('utf-8')).hexdigest()[:16]

def generate_slug(name: str) -> str:
    """Generate SEO/URL friendly slug."""
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', name.lower()).strip('-')
    return slug[:80]

def determine_status(deadline_str: str, open_date_str: str = None) -> str:
    """Determine whether scholarship is open, upcoming, or closed based on current date."""
    try:
        deadline = datetime.strptime(deadline_str[:10], "%Y-%m-%d").date()
        if deadline < CURRENT_DATE:
            return "closed"
        if open_date_str:
            open_date = datetime.strptime(open_date_str[:10], "%Y-%m-%d").date()
            if open_date > CURRENT_DATE:
                return "upcoming"
        return "open"
    except Exception:
        return "open"

def determine_verification_status(status: str, source_type: str, deadline_str: str) -> str:
    """Classify verification status according to required rules."""
    try:
        deadline = datetime.strptime(deadline_str[:10], "%Y-%m-%d").date()
        if deadline < CURRENT_DATE:
            return "Expired"
    except Exception:
        pass
    if source_type in ["government_portal", "regulatory_authority", "international_government", "bilateral_government_exchange", "international_university", "state_portal", "corporate_csr", "foundation_ngo"]:
        return "Officially Verified"
    return "Source Verified"

print("Building GRANTLY genuine web-sourced scholarship dataset...")
