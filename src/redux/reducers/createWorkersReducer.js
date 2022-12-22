import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    success: false,
    isLoading: false,
    error: null
}

export default function createWorkerReducer(state = initialState, action){
    switch (action.type) {
        case ACTION_TYPES.CREATE_WORKER_REQUEST:
            return {...state};
        case ACTION_TYPES.CREATE_WORKER_SUCCESS:
            return {
                ...state,
                success: action.payload.success,
                isLoading: true
            };
        case ACTION_TYPES.CREATE_WORKER_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoading: true
            };
        case ACTION_TYPES.CLEAR_DATA:
            return initialState;
        default:
            return state;
    }
}