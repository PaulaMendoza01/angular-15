import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'image-app',
  templateUrl: './Image.component.html',
  styleUrls: ['./Image.component.css'],
})
export class ImageComponent {
  name = 'Angular ' + VERSION.major;
}
