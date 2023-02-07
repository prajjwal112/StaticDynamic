import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { OrdersListState } from "./orders-list/orders-list.models";
import { ordersListReducer } from "./orders-list/orders-list.reducer";

export interface OrdersState{
    ordersList: OrdersListState
}

export const reducers: ActionReducerMap<OrdersState>={
    ordersList: ordersListReducer
}

export const selectOrdersState = createFeatureSelector<OrdersState>('orders');