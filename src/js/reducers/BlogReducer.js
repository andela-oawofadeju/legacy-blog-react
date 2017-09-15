import * as types from '../actions/Types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return action.post;
    case types.GET_POST:
      return [action.post];
    default:
      return state;
  }
};