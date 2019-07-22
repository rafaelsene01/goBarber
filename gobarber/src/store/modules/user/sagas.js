import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    Alert.alert('Perfil atualizado com sucesso!');

    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Erro na atualizar perfil, confira seus dados.');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
