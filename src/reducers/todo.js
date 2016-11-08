import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  items: [],
  name: ''
};

/**
 *
 * @param state
 * @param action
 * @param {string} action.type
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TODO_CHANGE_NAME:
    {
      return {
        ...state,
        name: action.name
      };
    }
    case ActionTypes.TODO_ADD:
    {
      return {
        ...state,
        name: '',
        items: state.items.concat({
          id: Date.now(),
          name: state.name
        })
      };
    }
    case ActionTypes.TODO_CHANGE_STATUS:
    {
      let item = state.items.find(item => item.id == action.id),
        index = state.items.indexOf(item);

      return {
        ...state,
        items: Object.assign([], state.items, {[index]: {
          ...item,
          done: ! item.done
        }})
      };
    }
  }

  return state;
}
