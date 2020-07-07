import {Component, Input, ViewChild} from '@angular/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html'
})
export class ShareButtonsComponent {
  @Input() isActive: boolean;

  constructor() {}

  toggle() {
    this.isActive = !this.isActive;
  }
}
