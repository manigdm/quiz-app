import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

/**
* Http Service wrapper for every API calls 
*/
@Injectable()
export class BaseService {
	constructor(private _http: Http) {

    }

    /**
     * Observable get request
     */
    public get(url: string): Observable<any> {
        return this._http.get(url)
            .map(this.extractData, this)
            .catch(this.handleError);
    }

    /**
     * Observable post request
     */
    public post(url: string, data?: any): Observable<any> {
        return this._http.post(url,data)
            .map(this.extractData, this)
            .catch(this.handleError);
    }

    /**
     * Observable put request
     */
    public put(url: string, data?: any): Observable<any> {
        return this._http.put(url,data)
            .map(this.extractData, this)
            .catch(this.handleError);
    }

    /**
     * Observable delete request
     */
    public delete(url: string, data?: any): Observable<any> {
        return this._http.delete(url,data)
            .map(this.extractData, this)
            .catch(this.handleError);
    }

    /**
     * Extract data from response
     */
    private extractData(res) {
        let body = res.json();
        return body || {};
    }

    /**
     * Exception handling
     */
    private handleError(error: any) {
        return Observable.throw(error || 'Server error');
    }
}