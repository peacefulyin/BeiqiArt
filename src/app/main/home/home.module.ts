import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HeaderComponent} from "../../components/header/header.component";
import {HomeRoutingModule} from "./home.routing.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ]
})
export class HomeModule {
}
