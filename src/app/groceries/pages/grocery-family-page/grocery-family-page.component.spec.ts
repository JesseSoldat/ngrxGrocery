import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryFamilyPageComponent } from './grocery-family-page.component';

describe('GroceryFamilyPageComponent', () => {
  let component: GroceryFamilyPageComponent;
  let fixture: ComponentFixture<GroceryFamilyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryFamilyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryFamilyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
