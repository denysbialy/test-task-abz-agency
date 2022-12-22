import ACTION_TYPES from "../actions/actionTypes";

const initialState ={
    positions: [],
    error: null
}

export default function getPositionReducer(state = initialState, action){
    switch (action.type) {
        case ACTION_TYPES.GET_POSITION_REQUEST:
            return {...state};
        case ACTION_TYPES.GET_POSITION_SUCCESS:
            return {
                ...state,
                positions: action.payload,
            };
        case ACTION_TYPES.GET_POSITION_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state;
    }
}