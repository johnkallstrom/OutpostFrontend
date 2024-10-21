import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService<T> {
    private readonly baseUrl: string = 'https://localhost:7271/api/';

    constructor(private http: HttpClient) {}

    getList(endpoint: string) : Observable<T[]> {
        return this.http.get<T[]>(`${this.baseUrl}${endpoint}`);
    }
}