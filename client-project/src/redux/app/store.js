import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';

const store = configureStore({
  reducer: {
    dataList: dataReducer,
  },
});

export default store;
