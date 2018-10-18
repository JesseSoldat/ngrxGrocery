import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getFamilyMembers } from '../_selectors';
import { FamilyDict } from '../_models';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Welcome to your family grocery list!</h1>
    <mat-nav-list>
    <a *ngFor="let member of familyMembers | async | keyvalue"
    mat-list-item [routerLink]="['/groceries', member.key]"
    >
    {{ member.value.avatar }} {{member.value.name}}
  </a>
    </mat-nav-list>
  `,
})
export class HomePageComponent implements OnInit {
  familyMembers: Observable<FamilyDict>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.familyMembers = this.store.pipe(select(getFamilyMembers));
  }
}
