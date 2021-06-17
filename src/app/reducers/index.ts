import { UserActions } from './../user.actions';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from '../user.reducer';

export interface State {
  [x: string]: any;

  [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State, UserActions> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
};

export const metaReducers: MetaReducer<State, UserActions>[] = !environment.production ? [] : [];
