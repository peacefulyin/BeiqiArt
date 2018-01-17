import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent} from "../menu-button/menu-button.component";
import {HeaderComponent} from "./header.component";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
