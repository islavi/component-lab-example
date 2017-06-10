import { Component, Input } from "@angular/core";

@Component({
  selector: "my-button",
  template: `
    <button
      class='my-button my-button-{{type}}'>
        <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {

  @Input() type: string = 'primary';
  constructor() { }

}
