import { State } from './reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUsersFeatureState = createFeatureSelector<State>('usersState');

export const getUsers = createSelector(
  getUsersFeatureState,
  state => state.users
)
export const getError = createSelector(
  getUsersFeatureState,
  state => state.error
)

