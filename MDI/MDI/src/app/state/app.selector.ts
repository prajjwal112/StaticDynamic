import { createSelector } from "@ngrx/store";
import { AppState, selectAppState } from "./app.state";

export const selectContact = createSelector(selectAppState, (state: AppState)=> state.contact);
export const selectGame = createSelector(selectAppState, (state: AppState)=> state.game);