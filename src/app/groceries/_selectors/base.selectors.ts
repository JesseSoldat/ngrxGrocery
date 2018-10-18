import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  GroceriesState,
  State,
  groceries as fromGroceries
} from '../_reducers';
import { FamilyMemberGroceriesDict } from '../_models';

export const groceriesState = createFeatureSelector<State, GroceriesState>(
  'groceries'
);

export const getGroceriesState = createSelector(
  groceriesState,
  state => state.groceries
);

export const getGroceries = createSelector(
  getGroceriesState,
  fromGroceries.selectAll
);

export const getGroceriesByFamilyMember = createSelector(
  getGroceries,
  groceries =>
    groceries.reduce<FamilyMemberGroceriesDict>(
      (groceriesByFamilyMember, grocery) => {
        // if the key exists do not change it else make it an empty array
        groceriesByFamilyMember[grocery.familyMemberId] =
          groceriesByFamilyMember[grocery.familyMemberId] || [];
        // add the grocer to the family member
        groceriesByFamilyMember[
          grocery.familyMemberId
        ] = groceriesByFamilyMember[grocery.familyMemberId].concat(grocery);
        // console.log(groceriesByFamilyMember);
        return groceriesByFamilyMember;
      },
      {}
    )
);
