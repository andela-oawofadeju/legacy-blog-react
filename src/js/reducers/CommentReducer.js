import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS:
      return action.comment;
    case types.GET_COMMENT:
      return [action.comment];
    default:
      return state;
  }
};