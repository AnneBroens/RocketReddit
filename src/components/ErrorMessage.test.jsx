import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';


describe('ErrorMessage', () => {
  it('toont de foutmelding', () => {
    render(<ErrorMessage message="Netwerkfout" onRetry={() => {}} />);

    expect(screen.getByText(/netwerkfout/i)).toBeInTheDocument();
  });

  it('roept onRetry aan bij klikken op Try again', () => {
    const onRetryMock = vi.fn();
    render(<ErrorMessage message="Netwerkfout" onRetry={onRetryMock} />);

    fireEvent.click(screen.getByText('Try again'));

    expect(onRetryMock).toHaveBeenCalledTimes(1);
  });
});