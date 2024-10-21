import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { HttpService } from "./httpService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private readonly endpoint: string = 'categories';

    constructor(private http: HttpService<Category>) {}

    getList() : Observable<Category[]> {
        return this.http.getList(this.endpoint);
    }
}