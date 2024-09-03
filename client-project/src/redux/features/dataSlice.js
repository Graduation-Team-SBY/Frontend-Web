import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: {message: "hello"},
    isLoading: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setIsLoading } = dataSlice.actions;

export default dataSlice.reducer;
