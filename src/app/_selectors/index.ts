import { createFeatureSelector, createSelector } from '@ngrx/store';

import { family, RouterReducerState, State } from '../_reducers';

export const routerState = createFeatureSelector<State, RouterReducerState>(
  'router',
);

export const familyState = createFeatureSelector<State, family.State>('family');

export const getFamilyMembers = createSelector(
  familyState,
  state => state.familyMembers,
);
