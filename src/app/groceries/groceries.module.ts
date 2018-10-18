import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { reducers } from './_reducers';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { GroceryFamilyMemberPageComponent } from './pages/grocery-family-member-page/grocery-family-member-page.component';
import { GroceryFamilyPageComponent } from './pages/grocery-family-page/grocery-family-page.component';

@NgModule({
  imports: [
    CommonModule,
    GroceriesRoutingModule,
    StoreModule.forFeature('groceries', reducers),
  ],
  declarations: [GroceryFamilyMemberPageComponent, GroceryFamilyPageComponent],
})
export class GroceriesModule {}