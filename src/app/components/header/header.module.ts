import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent} from "../menu-button/menu-button.component";
import {HeaderComponent} from "./header.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    MenuButtonComponent
  ],
  exports: [
    HeaderComponent,
    MenuButtonComponent
  ],
})
export class HeaderModule { }
