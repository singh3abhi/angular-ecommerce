import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class = "bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      
    <span class="text-xl" >My Store</span>
    <app-primary-button label = "Cart" (buttonClicked)="showButtonClicked()" ></app-primary-button>
    </div>
  `,
  styles: `
  `
})

export class HeaderComponent {

  showButtonClicked(){
    console.log("Hello world 123");
  }
}
