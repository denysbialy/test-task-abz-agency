import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    success: false,
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
            };
        case ACTION_TYPES.CREATE_WORKER_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state;
    }
}