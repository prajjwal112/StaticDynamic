import { createReducer } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { OrdersListState } from "./orders-list.models";
export const initialState: OrdersListState={
    orders:[]
}

const reducer = createReducer(
    initialState
);

export function ordersListReducer(state: OrdersListState | undefined, action: Action): OrdersListState {
    return reducer(state, action);
}