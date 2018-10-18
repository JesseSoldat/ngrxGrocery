import { createSelector } from '@ngrx/store';

import { FamilyMemberGroceryViewModel } from '../_models';
import * as root from '../../_selectors';
import { getGroceriesByFamilyMember } from './base.selectors';

export const getFamilyMembersGroceries = createSelector(
  root.getFamilyMembers,
  getGroceriesByFamilyMember,
  (familyMembers, groceries): FamilyMemberGroceryViewModel[] => {
    return Object.keys(familyMembers).map(familyMemberId => {
      const familyMember = familyMembers[familyMemberId];
      const familyMemberGroceries = groceries[familyMemberId] || [];

      return {
        familyMember,
        groceries: familyMemberGroceries,
      };
    });
  },
);
