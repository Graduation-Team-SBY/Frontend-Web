import { configureStore } from '@reduxjs/toolkit';
import clientProfileReducer from '../features/clientProfileSlice';
import workerProfileSlice from '../features/workerProfileSlice';

const store = configureStore({
  reducer: {
    clientProfile: clientProfileReducer,
    workerProfile: workerProfileSlice
  },
});

export default store;
