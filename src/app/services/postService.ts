import { Observable } from "rxjs";
import { HttpService } from "./httpService";
import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private readonly endpoint: string = 'posts';

    constructor(private http: HttpService<Post>) {}

    getList() : Observable<Post[]> {
        return this.http.getList(this.endpoint);
    }
}