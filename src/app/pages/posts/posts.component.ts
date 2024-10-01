import { Component } from "@angular/core";
import { Badge } from "../../shared/badge/badge.component";
import { Card } from "../../shared/card/card.component";
import { Category } from "../../models/category.model";

@Component({
    standalone: true,
    imports: [Badge, Card],
    templateUrl: 'posts.component.html'
})
export class Posts {
    categoryBaseLink: string = "/posts?category=";
    categories: Category[] = [
        {
            id: 1,
            name: "Movies"
        },
        {
            id: 2,
            name: "Programming"
        },
        {
            id: 3,
            name: "Games"
        },
        {
            id: 4,
            name: "Plants"
        },
        {
            id: 5,
            name: "Cities"
        },
        {
            id: 6,
            name: "Boardgames"
        },
    ]
};