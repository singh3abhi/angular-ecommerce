import { Component, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-80" (click) = "handleButtonClick()">
      {{ label() }}

    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input(''); // Input signal

  buttonClicked = output();

  handleButtonClick() {
    this.buttonClicked.emit();
  }
}
