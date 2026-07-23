import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('toont de loading-tekst', () => {
    render(<LoadingSpinner />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('toont de spinner-afbeelding', () => {
    render(<LoadingSpinner />);

    expect(screen.getByAltText('Loading')).toBeInTheDocument();
  });
});