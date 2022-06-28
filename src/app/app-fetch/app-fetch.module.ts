import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFetchRoutingModule } from './app-fetch-routing.module';
import { FetchDefaultComponent } from './components/fetch-default/fetch-default.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { FetchSearchComponent } from './components/fetch-search/fetch-search.component';

@NgModule({
    declarations: [
        FetchDefaultComponent,
        FetchSearchComponent
    ],
  exports: [
    FetchDefaultComponent,
    FetchSearchComponent
  ],
    imports: [
        CommonModule,
        AppFetchRoutingModule,
        MatInputModule,
        FormsModule,
        FlexModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class AppFetchModule { }