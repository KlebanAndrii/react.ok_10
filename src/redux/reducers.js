import {
    SET_POSTS,
    SET_IS_LOADING,
    RESET_IS_LOADING,
    SET_ERROR
} from './actionTypes';

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

//http://jsonplaceholder.typicode.com/posts

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case RESET_IS_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state;
    }

}