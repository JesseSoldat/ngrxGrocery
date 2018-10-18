import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Grocery } from '../../_models';
import { FamilyMember } from '../../../_models';

@Component({
  selector: 'app-grocery-input',
  templateUrl: './grocery-input.component.html',
  styleUrls: ['./grocery-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryInputComponent {
  @Input()
  familyMember: FamilyMember;

  @Output()
  addGrocery = new EventEmitter<Partial<Grocery>>();

  onEnter(event: any) {
    this.addGrocery.emit({
      familyMemberId: this.familyMember.id,
      description: event.target.value
    });

    event.target.value = '';
  }
}
