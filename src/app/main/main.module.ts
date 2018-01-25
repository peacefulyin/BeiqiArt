import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from "./main.routing.module";
import {CarouselModule} from 'primeng/primeng';
import { MediaService} from "../shared/api/main/media.service";

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
  ],
  declarations: [
    MainComponent,
  ],
  providers: [
    MediaService
  ],
})


export class MainModule {
}
