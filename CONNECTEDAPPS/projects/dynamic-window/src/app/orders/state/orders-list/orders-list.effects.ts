import { Injectable } from "@angular/core";
import { ofType } from "@ngrx/effects";
import { Actions, createEffect } from "@ngrx/effects";
import * as fromActions from './orders-list.actions';
import {map, switchMap} from 'rxjs/operators';
import { OrderService } from "shared-components";

@Injectable()
export class OrdersListEffects{

    loadOrders$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(fromActions.loadOrdersList),
            switchMap(()=>{
                return this.orderService$.getProducts().pipe(
                    map((p)=> console.log(p))
                )
            })
        )
    },{
        dispatch:false
    })
    constructor(
        private readonly actions$: Actions,
        private readonly orderService$: OrderService
    ){}
}