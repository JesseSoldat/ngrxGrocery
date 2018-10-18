import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FamilyDict } from '../_models';

@Component({
  selector: 'app-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Welcome to your family grocery list!</h1> 
  `,
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store<{}>) {}

  ngOnInit() {}
}
