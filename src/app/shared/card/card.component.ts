import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class Card {
    @Input() title: string = "(No title)";
    @Input() body: string = "";
};