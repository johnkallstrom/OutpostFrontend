import { Component, OnInit } from "@angular/core";
import { Badge } from "../../shared/badge/badge.component";
import { Card } from "../../shared/card/card.component";
import { Category } from "../../models/category.model";
import { CategoryService } from "../../services/categoryService";

@Component({
    standalone: true,
    imports: [Badge, Card],
    templateUrl: 'posts.component.html'
})
export class Posts implements OnInit {
    categoryBaseLink: string = "/posts?category=";
    categories: Category[] = [];

    constructor(private categoryService: CategoryService) {

    }

    ngOnInit(): void {
        this.categoryService.getList().subscribe(data => this.categories = data);
    }
};