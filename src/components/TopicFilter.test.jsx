import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../store/postSlice';
import TopicFilter from './TopicFilter';

describe('TopicFilter', () => {
  it('dispatcht de zoekterm bij klikken op een topic-knop', () => {
    const store = configureStore({ reducer: { posts: postsReducer } });

    render(
      <Provider store={store}>
        <TopicFilter />
      </Provider>
    );

    fireEvent.click(screen.getByText('climate'));

    expect(store.getState().posts.searchTerm).toBe('climate');
  });

  it('reset de zoekterm bij klikken op Clear', () => {
    const store = configureStore({ reducer: { posts: postsReducer } });

    render(
      <Provider store={store}>
        <TopicFilter />
      </Provider>
    );

    fireEvent.click(screen.getByText('climate'));
    fireEvent.click(screen.getByText('Clear'));

    expect(store.getState().posts.searchTerm).toBe('');
  });
});

