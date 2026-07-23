import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/postSlice';
import SearchBar from './SearchBar';


describe('SearchBar', () => {
    it('dispatcht de zoekterm bij klikken op Search', () => {
        const store = configureStore({ reducer: { posts: postsReducer } });
     render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Find what you are looking for');
    fireEvent.change(input, { target: { value: 'climate' } });
    fireEvent.click(screen.getByText('Search'));

    expect(store.getState().posts.searchTerm).toBe('climate');
  });
});