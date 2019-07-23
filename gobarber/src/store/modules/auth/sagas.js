import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
// import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert('Erro ao logar, usuario nao pode ser prestador de servicos');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // yield delay(2000);

    yield put(signInSuccess(token, user));

    // history.push('./dashboard');
  } catch (error) {
    Alert.alert('Falha na autencicacao, verifique seus dados!!!');

    yield put(signFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    Alert.alert('Conta criada!');
    // history.push('/');
  } catch (error) {
    Alert.alert('Falha na autencicacao, verifique seus dados!!!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function singOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', singOut),
]);
