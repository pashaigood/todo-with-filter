import * as ActionTypes from '../constants/ActionTypes';

export function addTodo() {
  return {
    type: ActionTypes.TODO_ADD
  };
}

export function changeName(name) {
  return {
    type: ActionTypes.TODO_CHANGE_NAME,
    name
  };
}

export function changeTodoStatus(id, status) {
  return {
    type: ActionTypes.TODO_CHANGE_STATUS,
    id,
    status
  };
}

export function filterChange(payload) {
  return {
    type: ActionTypes.TODO_FILTER_CHANGE,
    payload
  };
}
