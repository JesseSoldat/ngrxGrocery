import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { reducers } from './_reducers';
import { GroceriesRoutingModule } from './groceries-routing.module';
import { GroceryFamilyMemberPageComponent } from './pages/grocery-family-member-page/grocery-family-member-page.component';
import { GroceryFamilyPageComponent } from './pages/grocery-family-page/grocery-family-page.component';
import { HeaderComponent } from './_components/header/header.component';
import { GroceryListComponent } from './_components/grocery-list/grocery-list.component';
import { GroceryInputComponent } from './_components/grocery-input/grocery-input.component';
import { GroceryVisibilityComponent } from './_components/grocery-visibility/grocery-visibility.component';
import { RemoveCheckedOutGroceriesComponent } from './_components/remove-checked-out-groceries/remove-checked-out-groceries.component';

@NgModule({
  imports: [
    CommonModule,
    GroceriesRoutingModule,
    StoreModule.forFeature('groceries', reducers),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    GroceryFamilyMemberPageComponent,
    GroceryFamilyPageComponent,
    HeaderComponent,
    GroceryListComponent,
    GroceryInputComponent,
    GroceryVisibilityComponent,
    RemoveCheckedOutGroceriesComponent
  ]
})
export class GroceriesModule {}
