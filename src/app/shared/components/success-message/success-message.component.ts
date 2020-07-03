import {Component, ViewChild} from '@angular/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html'
})
export class SuccessMessageComponent {
  @ViewChild('alert', {static: true}) protected alert: SwalComponent;

  constructor() {}

  toggle() {
    if (this.alert.swalVisible) {
      this.alert.dismiss();
    } else {
      this.alert.fire();
    }
  }
}
