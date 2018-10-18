import { createSelector } from '@ngrx/store';

import * as root from '../../_selectors';
import { getGroceriesByFamilyMember } from './base.selectors';

import { GroceryViewModel } from '../_models';

// get params from the route
export const getActiveFamilyMemberId = createSelector(
  root.routerState,
  state =>
    state &&
    state.state &&
    state.state.root.firstChild &&
    state.state.root.firstChild.firstChild &&
    state.state.root.firstChild.firstChild.params.id
);

export const getActiveFamilyMember = createSelector(
  root.getFamilyMembers,
  getActiveFamilyMemberId,
  (familyMembers, id) => {
    return familyMembers[id];
  }
);

export const getActiveFamilyMemberGroceries = createSelector(
  getGroceriesByFamilyMember,
  getActiveFamilyMemberId,
  (groceries, familyMemberId) => groceries[familyMemberId] || []
);
