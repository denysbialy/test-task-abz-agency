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