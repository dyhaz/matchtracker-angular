import {Component, ViewChild} from '@angular/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent {
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
