import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { GroceryViewModel } from '../../_models';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryListComponent {
  @Input()
  groceries: GroceryViewModel[];

  @Output()
  checkOffGrocery = new EventEmitter<string>();

  checkOff(grocery: GroceryViewModel) {
    this.checkOffGrocery.emit(grocery.id);
  }
}
