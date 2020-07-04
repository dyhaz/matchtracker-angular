import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './circular-spinner.component.html'
})
export class CircularSpinnerComponent {
  @Input() isActive: boolean;
  constructor() {}
}
