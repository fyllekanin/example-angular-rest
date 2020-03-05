import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _httpClient: HttpClient) {}

    get(url: string): Observable<any> {
        return this._httpClient.get(url);
    }
}