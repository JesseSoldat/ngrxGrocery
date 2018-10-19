import { ActionReducerMap } from '@ngrx/store';

import * as root from '../../_reducers';
import * as groceries from './groceries.reducer';
import * as visibility from './visibility.reducer';

export interface GroceriesState {
  groceries: groceries.State;
  visibility: visibility.State;
}

export interface State extends root.State {
  groceries: GroceriesState;
}

export const reducers: ActionReducerMap<GroceriesState> = {
  groceries: groceries.reducer,
  visibility: visibility.reducer
};

export { groceries, visibility };
