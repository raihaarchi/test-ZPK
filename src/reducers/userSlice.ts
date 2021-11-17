import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from 'types/user';
import { fetchMe } from 'api/sveta';
import { RootState } from 'store';

export type UserState = {
  isCustomer: boolean;
  user: User | null;
  userLoading: boolean;
};
const initialState: UserState = {
  isCustomer: false,
  user: null,
  userLoading: false,
};

export const getUser = createAsyncThunk<User, void, { state: RootState }>(
  'user/get',
  async (_, { dispatch }) => {
    try {
      const user = await fetchMe();
      dispatch(setUser(user));

      return user;
    } catch (e) {
      throw e;
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser(state: UserState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setUserLoading(state, action: PayloadAction<boolean | undefined>) {
      state.userLoading = action.payload || false;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export const userReducer = userSlice.reducer;
