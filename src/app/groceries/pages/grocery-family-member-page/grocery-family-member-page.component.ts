import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grocery-family-member-page',
  templateUrl: './grocery-family-member-page.component.html',
  styleUrls: ['./grocery-family-member-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroceryFamilyMemberPageComponent implements OnInit {
  constructor(public store: Store<{}>) {}

  ngOnInit() {}
}
