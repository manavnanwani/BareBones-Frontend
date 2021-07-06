import * as api from "../api/index.js";
import { CREATE_SUB, GET_ALL } from "../constants/actionTypes";

export const createSub = (post, history) => async (dispatch) => {
  try {
    const { data } = await api.createSub(post);
    dispatch({ type: CREATE_SUB, payload: data });
    history.push(`/posts`);
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSubs = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getAll();
    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
