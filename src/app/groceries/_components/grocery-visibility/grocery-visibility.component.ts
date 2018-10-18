import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-grocery-visibility',
  templateUrl: './grocery-visibility.component.html',
  styleUrls: ['./grocery-visibility.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryVisibilityComponent {
  @Output()
  toggleCheckedOffGroceries = new EventEmitter<void>();

  toggle() {
    this.toggleCheckedOffGroceries.emit();
  }
}
