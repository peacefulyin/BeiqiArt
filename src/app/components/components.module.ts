import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsRoutingModule} from "./components.routing.module";
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {FooterComponent} from './footer/footer.component';
import {SlideRiverComponent} from "./slide-river/slide-river.component";
import {CarouselModule} from 'primeng/primeng';
import {MenuButtonComponent} from "./menu-button/menu-button.component";
import {ProListCardComponent} from "./pro-list-card/pro-list-card.component";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    ComponentsRoutingModule
  ],
  declarations: [
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    SlideRiverComponent,
    MenuButtonComponent,
    ProListCardComponent
  ]
})
export class ComponentsModule {
}
