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
import { FetchDetailsComponent } from './components/fetch-details/fetch-details.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    declarations: [
        FetchDefaultComponent,
        FetchSearchComponent,
      FetchDetailsComponent
    ],
  exports: [
    FetchDefaultComponent,
    FetchSearchComponent,
    FetchDetailsComponent
  ],
  imports: [
    CommonModule,
    AppFetchRoutingModule,
    MatInputModule,
    FormsModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class AppFetchModule { }
