import { experimentOn } from '@islavi/ng2-component-lab';
import { CheckboxComponent } from "./../components/checkbox.component";

export default experimentOn('Checkbox')
  .case('Normal Checkbox', {
    template: `
      <my-checkbox [name]="'myCheckBox'" label="This is checkbox label"></my-checkbox>
    `
  });
