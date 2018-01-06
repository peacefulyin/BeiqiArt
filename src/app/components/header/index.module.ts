import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from "./header.module";

@NgModule({
  imports: [
    HeaderModule
  ],
  exports: [
    HeaderModule
  ],
  declarations: [
  ]
})
export class HeaderIndexModule { }
