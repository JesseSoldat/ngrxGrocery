import { ActionReducer } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import uuid from 'uuid';

import { Grocery } from '../_models';

export interface State extends EntityState<Grocery> {}

// Actions
export const ADD_GROCERY = '[Grocery Person Page] Add grocery to list';

export const addGrocery = ({
  id = uuid(),
  description = '',
  familyMemberId = '',
  createdOn = Date.now()
}) => {
  let descriptionPayload = description;

  // pull of each '!' from the front of the word
  while (descriptionPayload.startsWith('!')) {
    descriptionPayload = descriptionPayload.substr(1);
  }

  const importance = description.length - descriptionPayload.length;

  return {
    type: ADD_GROCERY as typeof ADD_GROCERY,
    payload: {
      id,
      description: descriptionPayload.trim(),
      familyMemberId,
      importance,
      createdOn,
      checkedOffOn: null
    }
  };
};

export const CHECK_OFF_GROCERY_PERSON_PAGE =
  '[Grocery Person Page] Check off grocery';

export const checkOffGroceryPersonPage = ({
  id = '',
  checkedOffOn = Date.now()
}) => ({
  type: CHECK_OFF_GROCERY_PERSON_PAGE as typeof CHECK_OFF_GROCERY_PERSON_PAGE,
  payload: {
    id,
    checkedOffOn
  }
});

export type GroceriesActions =
  | ReturnType<typeof addGrocery>
  | ReturnType<typeof checkOffGroceryPersonPage>;

// Reducer
export const adapter: EntityAdapter<Grocery> = createEntityAdapter<Grocery>({});

export const initialState: State = adapter.getInitialState();

export function stateReducer(
  state = initialState,
  action: GroceriesActions
): State {
  switch (action.type) {
    case ADD_GROCERY:
      return adapter.addOne(action.payload, state);

    case CHECK_OFF_GROCERY_PERSON_PAGE:
      return adapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        state
      );

    default:
      return state;
  }
}

export const reducer = stateReducer;

export const { selectAll } = adapter.getSelectors();
