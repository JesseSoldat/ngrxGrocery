import { Component, OnInit, Input } from '@angular/core';
import { GroceryViewModel } from '../../_models';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit {
  @Input()
  groceries: GroceryViewModel[];

  constructor() {}

  ngOnInit() {}
}
