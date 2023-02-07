import { createFeatureSelector } from "@ngrx/store";

export interface AppState{
    game: string;
    contact: string;
}

export const selectAppState = createFeatureSelector<AppState>('MDI');