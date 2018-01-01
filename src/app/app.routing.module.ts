import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/index";
import {Test1Component} from "./test1/index";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'test1', component: Test1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
