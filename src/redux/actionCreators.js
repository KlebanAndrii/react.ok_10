import {
    SET_IS_LOADING,
    SET_POSTS,
    RESET_IS_LOADING,
    SET_ERROR
} from "./actionTypes";

export const setIsLoading = () => ({type: SET_IS_LOADING})
export const setPosts = (payload) => ({type: SET_POSTS, payload})
export const resetIsLoading = () => ({type: RESET_IS_LOADING})
export const setError = (payload) => ({type: SET_ERROR, payload})

