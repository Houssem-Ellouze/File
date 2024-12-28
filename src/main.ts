import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIYVBpR2Nbek55fldPal1RVAciSV9jS3pSdEdnWH5ddXRVQmhdVg==");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
