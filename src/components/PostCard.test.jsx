import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';

describe('PostCard', () => {
  it('toont de titel, auteur en upvotes', () => {
    render(
      <PostCard
        title="Test titel"
        author="testuser"
        upvotes={100}
        numComments={5}
      />
    );

    expect(screen.getByText('Test titel')).toBeInTheDocument();
    expect(screen.getByText(/testuser/)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });
});