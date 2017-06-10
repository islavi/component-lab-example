import { experimentOn } from '@islavi/ng2-component-lab';
import { ButtonComponent } from "./../components/button.component";

export default experimentOn('Button')
  .case('Primary Button', {
    styles: [`
      my-button /deep/ .my-button {
        border: solid 1px darkblue;
        color: white;
        border-radius: 4px;
        padding: 2px 10px;
        cursor: pointer;
      }
      my-button /deep/ .my-button-primary {
        background-color: blue;
      }
    `],
    template: `
      <my-button>Button</my-button>
    `
  })
  .case('Warning Button', {
    context: {
      buttonLabel: 'Warning!',
    },
    styles: [`
      my-button /deep/ .my-button {
        border: solid 1px darkblue;
        color: white;
        border-radius: 4px;
        padding: 2px 10px;
        cursor: pointer;
      }
      my-button /deep/ .my-button-warning {
        border: solid 1px darkred;
        background-color: red;
      }
    `],
    template: `
      <my-button [type]="'warning'">
        {{ buttonLabel }}
      </my-button>
    `
  })
  .xcase('Not Yet Implemented', {
    template: `
      <my-button raised>Raised Button</my-button>
    `
  })
