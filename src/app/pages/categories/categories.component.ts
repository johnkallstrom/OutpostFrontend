import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../services/categoryService";
import { Category } from "../../models/category.model";

@Component({
    templateUrl: 'categories.component.html'
})
export class Categories implements OnInit {
    categories: Category[] = [];

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.getList().subscribe(data => this.categories = data);
    }
};