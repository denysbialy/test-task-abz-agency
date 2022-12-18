import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    workers: [],
    isLoading: false,
    error: null
}

export default function workersReducer(state = initialState, action){
    switch (action.type) {
        case ACTION_TYPES.WORKINING_USER_REQUEST:
            return {...state, isLoading: true};
        case ACTION_TYPES.WORKINING_USER_SUCCESS:
            return {
                ...state,
                workers: action.payload.workers,
                isLoading: false,
            };
        case ACTION_TYPES.WORKINING_USER_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            }
        default:
            return state;
    }
}