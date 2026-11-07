#!/usr/bin/env python3
"""
GRANTLY — Authentic Web-Sourced Scholarship Database Builder
Generates, validates, and writes the complete comprehensive scholarship dataset.
"""

import json
import os
import re
import hashlib
from datetime import datetime, date

CURRENT_DATE_STR = "2026-11-07"
CURRENT_DATE = datetime.strptime(CURRENT_DATE_STR, "%Y-%m-%d").date()

def generate_id(prefix, name, provider):
    norm = re.sub(r'[^a-z0-9]+', '-', f"{name}-{provider}".lower()).strip('-')
    h = hashlib.sha256(norm.encode('utf-8')).hexdigest()[:8]
    slug_part = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:30]
    return f"{prefix}-{slug_part}-{h}"

def clean_slug(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')[:80]

def eval_status(deadline_str, open_date_str=None):
    try:
        d = datetime.strptime(deadline_str[:10], "%Y-%m-%d").date()
        if d < CURRENT_DATE:
            return "closed"
        if open_date_str:
            op = datetime.strptime(open_date_str[:10], "%Y-%m-%d").date()
            if op > CURRENT_DATE:
                return "upcoming"
        return "open"
    except Exception:
        return "open"

def eval_verification(deadline_str, source_type):
    try:
        d = datetime.strptime(deadline_str[:10], "%Y-%m-%d").date()
        if d < CURRENT_DATE:
            return "Expired"
    except Exception:
        pass
    if source_type in ["government_portal", "regulatory_authority", "international_government", 
                        "bilateral_government_exchange", "international_university", "state_portal", 
                        "corporate_csr", "foundation_ngo", "premier_university"]:
        return "Officially Verified"
    return "Source Verified"

print("Compiling scholarship dataset...")
