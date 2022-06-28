import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppFetchModule} from "../app-fetch/app-fetch.module";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    RootDefaultComponent
  ],
    imports: [
        BrowserModule,
        RootBrowserRoutingModule,
        AppFetchModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [
    RootDefaultComponent
  ]
})
export class RootBrowserModule { }
