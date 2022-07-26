import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IAppState, IContact } from './types';

export const initialState: IAppState = {
  isLoading: false,
  isError: false,
  contactList: [],
  isDrawerOpen: false,
};

const applicationsSlice = createSlice({
  // @ts-ignore: Unreachable code error
  name: 'appState',
  initialState,
  reducers: {
    getUsers(state) {
      state.isLoading = true;
      state.isError = false;
    },
    getUsersSuccess(state, action: PayloadAction<IContact[]>) {
      state.isLoading = false;
      state.isError = false;
      state.contactList = action.payload;
    },
    getUsersFailure(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setDrawerOpen(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    resetState(state) {
      state = initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = applicationsSlice;
