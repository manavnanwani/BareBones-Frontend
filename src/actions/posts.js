import * as api from "../api/index.js";
import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
  LIKEPOST,
  DISLIKEPOST,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants/actionTypes";

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });

    history.push(`/posts/${data._id}`);

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    history.push(`/`);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKEPOST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const dislikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.dislikePost(id);
    dispatch({ type: DISLIKEPOST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
