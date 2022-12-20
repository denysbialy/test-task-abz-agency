import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    token: '',
    error: null
}

export default function getTokenReducer(state = initialState, action){
    switch (action.type) {
        case ACTION_TYPES.GET_TOKEN_REQUEST:
            return {...state};
        case ACTION_TYPES.GET_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
            };
        case ACTION_TYPES.GET_TOKEN_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state;
    }
}