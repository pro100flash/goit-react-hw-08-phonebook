import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSignUp, fetchLogIn, fetchLogOut } from 'services/phonebookApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await fetchSignUp(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Creation error, please try again 🤯');
      } else if (error.response.status === 500) {
        toast.error('Server error, please try later 🤯');
      } else {
        toast.error('Whoops, something went wrong 🤯');
      }
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await fetchLogIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Invalid email or password 👺');
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await fetchLogOut();
      token.unset();
    } catch (error) {
      if (error.response.status === 500) {
        toast.error('Server error, please try later! 🤯');
      } else {
        toast.error('Whoops, something went wrong 🤯');
      }
      return rejectWithValue(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.info('Authorization timed out 😕');
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
