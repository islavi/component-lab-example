import { experimentOn } from '@islavi/ng2-component-lab';
import { ButtonComponent } from "./../components/button.component";

export default experimentOn('Button')
  .case('Normal Button', {
    template: `
      <sdc-button [type]='sample'>Button</sdc-button>
    `
  });


  // .case('Warning Button', {
  //   context: {
  //     buttonLabel: 'Warning!',
  //   },
  //   styles: [`
  //     :host {
  //       text-align: center;
  //     }
  //   `],
  //   template: `
  //     <my-button [type]="warning">
  //       {{ buttonLabel }}
  //     </my-button>
  //   `
  // })
  // .xcase('Not Yet Implemented', {
  //   template: `
  //     <my-button raised>Raised Button</my-button>
  //   `
  // })
