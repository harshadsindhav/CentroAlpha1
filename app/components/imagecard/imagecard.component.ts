

import { Component, Input } from '@angular/core';

@Component({
    selector : 'image-card',
    templateUrl : './app/components/imagecard/imagecard.component.html'

})

export class ImageCardComponent {

@Input() title : string = "Default Title";
@Input() subtitle : string = "Default subtitle";

} 