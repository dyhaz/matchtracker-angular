import {AfterViewInit, Component, Input} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spinner',
  templateUrl: './circular-spinner.component.html'
})
export class CircularSpinnerComponent implements AfterViewInit {
  @Input() isActive: boolean;
  showMessage = false;

  constructor() {}

  ngAfterViewInit() {
    setInterval(() => {
      if (Swal.isVisible()) {
        if (Swal.getContent().innerText.includes('error')) {
          this.isActive = false;
          this.showMessage = true;
        }
      }
    }, 100);
  }

  reload() {
    location.reload();
  }
}
