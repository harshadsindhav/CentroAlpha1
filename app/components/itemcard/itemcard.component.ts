
import { Component, Input } from '@angular/core';


@Component({
        selector : 'item-card',
        templateUrl : './app/components/itemcard/itemcard.component.html'

})

export class ItemCardComponent {

        @Input()title : string;
        
}