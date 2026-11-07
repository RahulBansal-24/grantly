import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EligibilityBadge } from '../EligibilityBadge';

describe('EligibilityBadge Component', () => {
  it('renders ELIGIBLE badge accurately', () => {
    render(<EligibilityBadge status="ELIGIBLE" matchScore={95} />);
    expect(screen.getByText('ELIGIBLE')).toBeDefined();
    expect(screen.getByText('95% Match')).toBeDefined();
  });

  it('renders NEEDS INFO badge accurately', () => {
    render(<EligibilityBadge status="NEEDS_INFORMATION" matchScore={45} />);
    expect(screen.getByText('NEEDS INFO')).toBeDefined();
    expect(screen.getByText('45% Match')).toBeDefined();
  });

  it('renders NOT ELIGIBLE badge accurately', () => {
    render(<EligibilityBadge status="NOT_ELIGIBLE" matchScore={15} />);
    expect(screen.getByText('NOT ELIGIBLE')).toBeDefined();
    expect(screen.getByText('15% Match')).toBeDefined();
  });
});
