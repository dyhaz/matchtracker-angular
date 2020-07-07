import {Component, ViewChild} from '@angular/core';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-no-match-message',
  templateUrl: './no-match-message.component.html'
})
export class NoMatchMessageComponent {
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
