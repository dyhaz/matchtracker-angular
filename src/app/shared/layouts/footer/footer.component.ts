import {AfterViewInit, Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements AfterViewInit {
  date = new Date();
  env = environment;
  quote = '';

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => this.generateQuote(), 100);
  }

  generateQuote(): void {
    const quotes = ['“Your talent determines what you can do. Your motivation determines how much you are willing to do. Your attitude ' +
      'determines how well you do it.” ― Lou Holtz', '“Today I will do what other\'s won\'t, so tomorrow I will do what others ' +
      'can\'t.” ― Jerry Rice', '“In football everything is complicated by the presence of the opposite team.” ― Jean-Paul Sartre',
      '“Everyone has the fire, but the champions know when to ignite the spark.” ― Amit Ray', '“Football is the ballet of the masses.” ' +
      '― Dmitri Shostakovich', '“The Enemy of the best is the good. If you\'re always settling with what\'s good, you\'ll ' +
      'never be the best.” ― Jerry Rice', '“Once you learn to quit, it becomes a habit.” ― Vince Lombardi'];
    this.quote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}
