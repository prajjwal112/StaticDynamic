import { createReducer, on } from "@ngrx/store"
import { loadContact, loadGame } from "./app.actions"
import { AppState } from "./app.state"


export const initialState: AppState = {
    contact: '',
    game: ''
    
}

export const appReducer = createReducer(
    initialState,
    on(loadContact, (state: AppState): AppState => (
        {
            ...state,
           contact: 'contact is loaded',
           game: ''
        }
    )),
    on(loadGame, (state: AppState): AppState => (
        {
            ...state,
           contact: '',
           game: 'game is loaded'
        }
    )),
   
)
