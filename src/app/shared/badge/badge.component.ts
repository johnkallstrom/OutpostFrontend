import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'badge',
    templateUrl: 'badge.component.html'
})
export class Badge {
    label: string = "Cities";
    link: string = "/posts?category=Cities"
};