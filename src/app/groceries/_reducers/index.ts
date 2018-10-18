import { ActionReducerMap } from '@ngrx/store';

import * as root from '../../_reducers';
import * as groceries from './groceries.reducer';

export interface GroceriesState {
  groceries: groceries.State;
}

export interface State extends root.State {
  groceries: GroceriesState;
}

export const reducers: ActionReducerMap<GroceriesState> = {
  groceries: groceries.reducer,
};

export { groceries };
