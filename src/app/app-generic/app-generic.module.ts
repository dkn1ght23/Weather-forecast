import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        TopNavComponent
    ],
    exports: [
        TopNavComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    FlexModule,
    ExtendedModule,
    MatButtonModule
  ]
})
export class AppGenericModule { }
