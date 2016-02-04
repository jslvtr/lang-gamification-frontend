import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  debugger;
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data.post };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data.posts };
  default:
    return state;
  }
}
