import { createSelector } from "reselect";

const selecUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selecUser],
  (user) => user.currentUser
);
