import { CREATE_SUB, GET_ALL } from "../constants/actionTypes";

const subs = (state = { subData: [] }, action) => {
  switch (action.type) {
    case CREATE_SUB:
      return action.payload;
    case GET_ALL:
      return { ...state, subData: action.payload };
    default:
      return state;
  }
};

export default subs;
