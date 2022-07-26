// import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { actions } from './slice';

export function* getUsers() {
  const url = 'https://randomuser.me/api/?results=4';
  try {
    const response = yield call(request.get, {
      url: url,
    });

    yield put(actions.getUsersSuccess(response.results));
  } catch (err) {
    yield put(actions.getUsersFailure());
  }
}

export function* applicationsSaga() {
  yield takeLatest(actions.getUsers.type, getUsers);
}
