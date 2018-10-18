import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FamilyMemberGroceryViewModel } from '../../_models';
import { getFamilyMembersGroceries } from '../../_selectors/grocery-family-page.selectors';

@Component({
  selector: 'app-grocery-family-page',
  templateUrl: './grocery-family-page.component.html',
  styleUrls: ['./grocery-family-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryFamilyPageComponent implements OnInit {
  familyMembersGroceries: Observable<FamilyMemberGroceryViewModel[]>;

  constructor(public store: Store<{}>) {}

  ngOnInit() {
    this.familyMembersGroceries = this.store.pipe(
      select(getFamilyMembersGroceries),
    );
  }
}
