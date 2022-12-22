import ACTION_TYPES from "./actionTypes";

export const workerRequest = (countUsers) => ({
    type: ACTION_TYPES.WORKINING_USER_REQUEST,
    payload : countUsers
  });
export const workingSuccess = (workers) => ({
    type: ACTION_TYPES.WORKINING_USER_SUCCESS,
    payload: {workers},
});
export const workingError = (error) => ({
    type: ACTION_TYPES.WORKINING_USER_ERROR,
    payload: { error },
});

export const createWorkerRequest = (form, token) => ({
    type: ACTION_TYPES.CREATE_WORKER_REQUEST,
    payload : {form, token},
    
  });
export const createWorkerSuccess = (success) => ({
    type: ACTION_TYPES.CREATE_WORKER_SUCCESS,
    payload: {success},
});
export const createWorkerError = (error) => ({
    type: ACTION_TYPES.CREATE_WORKER_ERROR,
    payload: { error },
});

export const getTokenRequest = () => ({
    type: ACTION_TYPES.GET_TOKEN_REQUEST,
  });
export const getTokenSuccess = (token) => ({
    type: ACTION_TYPES.GET_TOKEN_SUCCESS,
    payload: {token},
});
export const getTokenError = (error) => ({
    type: ACTION_TYPES.GET_TOKEN_ERROR,
    payload: { error },
});


export const getPositionRequest = () => ({
    type: ACTION_TYPES.GET_POSITION_REQUEST,
  });
export const getPositionSuccess = (positions) => ({
    type: ACTION_TYPES.GET_POSITION_SUCCESS,
    payload: positions,
});
export const getPositionError = (error) => ({
    type: ACTION_TYPES.GET_POSITION_ERROR,
    payload: { error },
});