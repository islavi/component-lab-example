import { createLab } from 'component-lab';
import { ComponentsModule } from './components.module';

createLab({
  /**
   * NgModule to import. All components and pipes must be exported
   * by this module to be useable in your experiments
   */
  ngModule: ComponentsModule,
  /**
   * Function that returns an array of experiments.
   *
   * Here is an example using webpack's `require.context` to
   * load all modules ending in `.exp.ts` and returning thier
   * default exports as an array:
   */
  loadExperiments() {
    const context = (require as any).context('./', true, /\.exp\.ts/);
	var result = context.keys().map(context).map(mod => mod.default);
    return result;
  }
});
