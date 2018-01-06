import {NgModule} from '@angular/core';
// import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HeaderModule} from "../../components/header/header.module";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {BannerComponent} from "../../components/banner/banner.component";
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {CarouselModule} from 'ngx-bootstrap';
import {ServicesInfoComponent} from "./services-info/services-info.component";
import { VideosMasterComponent} from "./videos-master/videos-master.component";
import {ProListCardComponent} from "../../components/pro-list-card/pro-list-card.component";
import {FooterComponent} from "../../components/footer/footer.component";


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    FormsModule,
    HeaderModule
  ],
  declarations: [
    HomeComponent,
    CarouselComponent,
    ServicesInfoComponent,
    VideosMasterComponent,
    BannerComponent,
    ProListCardComponent,
    FooterComponent
  ]
})
export class HomeModule {
}
