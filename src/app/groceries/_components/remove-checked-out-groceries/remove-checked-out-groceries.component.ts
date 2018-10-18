import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { FamilyMember } from '../../../_models';

@Component({
  selector: 'app-remove-checked-out-groceries',
  templateUrl: './remove-checked-out-groceries.component.html',
  styleUrls: ['./remove-checked-out-groceries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemoveCheckedOutGroceriesComponent {
  @Input()
  familyMember: FamilyMember;

  @Output()
  removeCheckedOffGroceries = new EventEmitter<string>();

  remove() {
    this.removeCheckedOffGroceries.emit(this.familyMember.id);
  }
}
