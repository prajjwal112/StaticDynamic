import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private productsUrl = 'api/products/';
  private elementsUrl = 'api/elements/';
  private ordersUrl = 'api/orders/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  getElements(): Observable<any[]> {
    return this.http.get<any[]>(this.elementsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.ordersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getOrderDetails(id:number): Observable<any> {
    return this.http.get<any>(`${this.ordersUrl}${id}`).pipe(
      retry(2),
      map(order=>order.details),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    const purl = 'api/products/1'
    return this.http.get<Product>(`${this.productsUrl}${id}`).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  // createProduct(product: Product): Observable<Product> {
  //   product.id = null;
  //   return this.http.post<Product>(this.productsUrl, product).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   )
  // }

  editProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl + product.id, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productsUrl + id);
  }
}
