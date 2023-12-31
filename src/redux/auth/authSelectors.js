export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;

export const selectEmail = state => state.auth.user.email;

export const selectIsFetching = state => state.auth.isFetchning;

export const selectError = state => state.auth.error;

export const selectAuthOperation = state => state.auth.authOperation;
