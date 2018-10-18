/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RemoveCheckedOutGroceriesComponent } from './remove-checked-out-groceries.component';

describe('RemoveCheckedOutGroceriesComponent', () => {
  let component: RemoveCheckedOutGroceriesComponent;
  let fixture: ComponentFixture<RemoveCheckedOutGroceriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCheckedOutGroceriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCheckedOutGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
