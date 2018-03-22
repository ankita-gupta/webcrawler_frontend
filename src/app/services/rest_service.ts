import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { URLS } from '../common/url-constant';
import { Injectable } from "@angular/core";

@Injectable()
export class RestService {
    public contentHeaders: HttpHeaders;
    constructor(private httpClient: HttpClient){

    }
    post(url: string, data):Observable<any> {
        this.contentHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
        return this.httpClient.post(url, data,  { headers: this.contentHeaders })
    }

}