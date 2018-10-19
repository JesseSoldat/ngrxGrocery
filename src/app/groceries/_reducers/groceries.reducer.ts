import { ActionReducer, Action } from '@ngrx/store';
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

// check todo
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

export const CHECK_OFF_GROCERY_FAMILY_PAGE =
  '[Grocery Family Page] Check off grocery';

export const checkOffGroceryFamilyPage = ({
  id = '',
  checkedOffOn = Date.now()
}) => ({
  type: CHECK_OFF_GROCERY_FAMILY_PAGE as typeof CHECK_OFF_GROCERY_FAMILY_PAGE,
  payload: {
    id,
    checkedOffOn
  }
});

// remove checked todos
export const REMOVE_CHECKED_OFF_GROCERIES =
  '[Grocery Person Page] Remove checked off groceries from list';

export const removeCheckedOffGroceries = ({ familyMemberId = '' }) => ({
  type: REMOVE_CHECKED_OFF_GROCERIES as typeof REMOVE_CHECKED_OFF_GROCERIES,
  payload: { familyMemberId }
});

export type GroceriesActions =
  | ReturnType<typeof addGrocery>
  | ReturnType<typeof checkOffGroceryPersonPage>
  | ReturnType<typeof checkOffGroceryFamilyPage>
  | ReturnType<typeof removeCheckedOffGroceries>;

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
    case CHECK_OFF_GROCERY_FAMILY_PAGE:
      return adapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        state
      );

    case REMOVE_CHECKED_OFF_GROCERIES:
      const idsToDelete = (<string[]>state.ids)
        .map(groceryId => state.entities[groceryId])
        .filter(grocery => {
          const { familyMemberId } = action.payload;
          if (
            grocery.familyMemberId === familyMemberId &&
            grocery.checkedOffOn !== null
          ) {
            return grocery;
          }
        })
        .map(grocery => grocery.id);

      return adapter.removeMany(idsToDelete, state);

    default:
      return state;
  }
}

export function persistStateReducer(_reducer: ActionReducer<State>) {
  const localStorageKey = '__groceries';
  return (state: State | undefined, action: Action) => {
    // state is not saved
    if (state === undefined) {
      try {
        const persisted = localStorage.getItem(localStorageKey);
        return persisted ? JSON.parse(persisted) : _reducer(state, action);
      } catch (err) {
        return _reducer(state, action);
      }
    }
    // have state saved
    const nextState = _reducer(state, action);
    try {
      localStorage.setItem(localStorageKey, JSON.stringify(nextState));
      return nextState;
    } catch (err) {
      return nextState;
    }
  };
}

export const reducer = persistStateReducer(stateReducer);

export const { selectAll } = adapter.getSelectors();
