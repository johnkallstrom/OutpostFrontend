import { Component, OnInit } from "@angular/core";
import { Badge } from "../../shared/badge/badge.component";
import { Card } from "../../shared/card/card.component";
import { Category } from "../../models/category.model";
import { CategoryService } from "../../services/categoryService";
import { Post } from "../../models/post.model";
import { PostService } from "../../services/postService";

@Component({
    standalone: true,
    imports: [Badge, Card],
    templateUrl: 'posts.component.html'
})
export class Posts implements OnInit {
    categoryBadgeBaseLink: string = "/posts?category=";
    posts: Post[] = [];
    categories: Category[] = [];

    constructor(
        private categoryService: CategoryService, 
        private postService: PostService) {

    }

    ngOnInit(): void {
        this.categoryService.getList().subscribe(data => this.categories = data);
        this.postService.getList().subscribe(data => this.posts = data);
    }
};