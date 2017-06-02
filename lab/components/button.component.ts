import { Component, Input } from "@angular/core";

@Component({
  selector: "sdc-button",
  template: "<button class='sdc-button sdc-button__{{type}}'><ng-content></ng-content></button>"
})
export class ButtonComponent {

  @Input() type: string = 'primary';
  constructor() { }

}
