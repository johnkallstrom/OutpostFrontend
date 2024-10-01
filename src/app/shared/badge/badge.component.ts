import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'badge',
    templateUrl: 'badge.component.html'
})
export class Badge {
    @Input() label: string = "(No label)";
    @Input() link: string = ""
};