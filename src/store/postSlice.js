import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const idsResponse = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json'
    );
    const ids = await idsResponse.json();

    const topIds = ids.slice(0, 20);
    const posts = await Promise.all(
      topIds.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) =>
          res.json()
        )
      )
    );

    return posts;
  }
);


//Dit gedeelte blijft altijd hetzelfde, ongeacht de API die je gebruikt 

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    searchTerm: '',
  },
  reducers: {
setSearchTerm: (state, action) => {
  state.searchTerm = action.payload;
},

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
export const { setSearchTerm } = postSlice.actions;