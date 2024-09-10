import { configureStore } from '@reduxjs/toolkit';
import clientProfileReducer from '../features/clientProfileSlice';

const store = configureStore({
  reducer: {
    clientProfile: clientProfileReducer,
  },
});

export default store;
