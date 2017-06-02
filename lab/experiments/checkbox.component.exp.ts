import { experimentOn } from 'component-lab';
import { CheckboxComponent } from "./../components/checkbox.component";

export default experimentOn('Checkbox')
  .case('Normal Checkbox', {
    template: `
      <sdc-checkbox name="myCheckBox" label="This is checkbox label"></sdc-checkbox>
    `
  });
