import { ActionReducer, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import uuid from 'uuid';

import { Grocery } from '../_models';

export interface State extends EntityState<Grocery> {}

export const adapter: EntityAdapter<Grocery> = createEntityAdapter<Grocery>({});

export const initialState: State = adapter.getInitialState();

export function stateReducer(state = initialState, action): State {
  switch (action.type) {
    default:
      return state;
  }
}

export const reducer = stateReducer;
