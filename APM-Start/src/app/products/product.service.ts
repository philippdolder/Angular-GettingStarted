import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    private url: string = '../api/products/products.json';

    constructor(private httpClient: HttpClient) { }
    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.url)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse): Observable<IProduct[]> {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}
