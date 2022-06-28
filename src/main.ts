import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {RootBrowserModule} from "./app/root-browser/root-browser.module";
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootBrowserModule)
  .catch(err => console.error(err));
