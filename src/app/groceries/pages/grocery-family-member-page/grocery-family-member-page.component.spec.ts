import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryFamilyMemberPageComponent } from './grocery-family-member-page.component';

describe('GroceryFamilyMemberPageComponent', () => {
  let component: GroceryFamilyMemberPageComponent;
  let fixture: ComponentFixture<GroceryFamilyMemberPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryFamilyMemberPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryFamilyMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
