import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://127.0.0.1:8001/products/products/';

  constructor(private http: HttpClient) { }

  getProducts(pageSize: number, pageIndex: number, search: string): Observable<any> {
    let params = new HttpParams()
      .set('limit', pageSize.toString())
      .set('offset', (pageIndex * pageSize).toString());

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map((response:any) => {
        return {
          products: response['results'],
          totalCount: response['count']
        };
      })
    );
  }
}
