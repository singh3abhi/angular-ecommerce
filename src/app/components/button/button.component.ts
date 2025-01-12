import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-black text-white w-full px-5 py-2 rounded-xl shadow-md"
      (click)="handleButtonClick()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input(''); // Input signal

  buttonClicked = output();

  handleButtonClick() {
    this.buttonClicked.emit();
  }
}
