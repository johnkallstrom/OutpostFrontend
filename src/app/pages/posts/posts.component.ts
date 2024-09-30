import { Component } from "@angular/core";
import { Badge } from "../../shared/badge/badge.component";
import { Card } from "../../shared/card/card.component";

@Component({
    standalone: true,
    imports: [Badge, Card],
    templateUrl: 'posts.component.html'
})
export class Posts {};