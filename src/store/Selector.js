import { createSelector } from 'reselect'

const selectLoginDomain = (state) => state["jwt"];

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token);
  