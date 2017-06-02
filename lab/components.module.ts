import { NgModule } from "@angular/core";
import { ButtonComponent } from "./components/button.component";
import { CheckboxComponent } from "./components/checkbox.component";

@NgModule({
    declarations: [
      ButtonComponent,
      CheckboxComponent
    ],
    imports: [

    ],
    entryComponents: [],
    exports: [
      ButtonComponent,
      CheckboxComponent
    ],
    providers: []
})
export class ComponentsModule {

}
