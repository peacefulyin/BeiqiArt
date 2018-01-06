import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArticleComponent} from "./article/article.component";
import {SlideRiverComponent} from "../components/slide-river/slide-river.component";

const routes: Routes = [
  {path: '', loadChildren: 'app/main/home/home.module#HomeModule'},
  {path: 'videoList', loadChildren: 'app/main/video-list/video-list.module#VideoListModule'},
  {path: 'article', component: ArticleComponent},
  {path: 'slider', component: SlideRiverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
