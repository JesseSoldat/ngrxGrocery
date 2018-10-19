import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GroceryViewModel, Grocery } from '../../_models';
import { FamilyMember } from '../../../_models';
import {
  getActiveFamilyMember,
  getVisibleActiveFamilyMemberGroceries
} from '../../_selectors/grocery-family-member-page.selectors';
import {
  addGrocery,
  checkOffGroceryPersonPage,
  removeCheckedOffGroceries
} from '../../_reducers/groceries.reducer';
import { toggleCheckedOffGroceries } from '../../_reducers/visibility.reducer';

@Component({
  selector: 'app-grocery-family-member-page',
  templateUrl: './grocery-family-member-page.component.html',
  styleUrls: ['./grocery-family-member-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryFamilyMemberPageComponent implements OnInit {
  familyMember: Observable<FamilyMember>;
  groceries: Observable<GroceryViewModel[]>;

  constructor(public store: Store<{}>) {}

  ngOnInit() {
    this.familyMember = this.store.pipe(select(getActiveFamilyMember));

    this.groceries = this.store.pipe(
      select(getVisibleActiveFamilyMemberGroceries),
      tap(g => {})
    );
  }

  addGrocery(grocery: Partial<Grocery>) {
    this.store.dispatch(addGrocery(grocery));
  }

  checkOffGrocery(groceryId: string) {
    this.store.dispatch(checkOffGroceryPersonPage({ id: groceryId }));
  }

  toggleCheckedOffGroceries() {
    this.store.dispatch(toggleCheckedOffGroceries());
  }

  removeCheckedOffGroceries(familyMemberId: string) {
    this.store.dispatch(removeCheckedOffGroceries({ familyMemberId }));
  }
}
