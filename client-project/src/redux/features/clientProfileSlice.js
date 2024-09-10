import { createSlice } from '@reduxjs/toolkit';
import axios from '../../config/axiosInstance';
import { toast } from 'react-toastify';

const clientProfileSlice = createSlice({
  name: 'clientProfile',
  initialState: {
    profile: {},
    isLoading: false,
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const fetchProfile = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'clients/profile',
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      dispatch(setProfile(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const { setProfile, setIsLoading } = clientProfileSlice.actions;

export default clientProfileSlice.reducer;
