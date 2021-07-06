import {
  CREATE,
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  UPDATE,
  DELETE,
  LIKEPOST,
  DISLIKEPOST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

// eslint-disable-next-line
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
    case LIKEPOST:
    case DISLIKEPOST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    default:
      return { ...state, posts: state };
  }
};
