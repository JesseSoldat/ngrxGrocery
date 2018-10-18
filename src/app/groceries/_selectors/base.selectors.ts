import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  GroceriesState,
  State,
  groceries as fromGroceries,
} from '../_reducers';
import { FamilyMemberGroceriesDict } from '../_models';

export const groceriesState = createFeatureSelector<State, GroceriesState>(
  'groceries',
);

export const getGroceriesState = createSelector(
  groceriesState,
  state => state.groceries,
);

export const getGroceries = createSelector(
  getGroceriesState,
  fromGroceries.selectAll,
);

export const getGroceriesByFamilyMember = createSelector(
  getGroceries,
  groceries =>
    groceries.reduce<FamilyMemberGroceriesDict>(
      (groceriesByFamilyMember, grocery) => {
        const { familyMemberId } = grocery;
        // if the key exist it does not change else make it an empty array
        groceriesByFamilyMember[familyMemberId] =
          groceriesByFamilyMember[familyMemberId] || [];
        // add the grocery to the family members list
        groceriesByFamilyMember[familyMemberId].concat(grocery);

        return groceriesByFamilyMember;
      },
      {},
    ),
);
