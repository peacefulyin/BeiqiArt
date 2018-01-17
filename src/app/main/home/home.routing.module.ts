import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {IndexComponent} from "./index/index.component";
import {VideosMasterComponent} from "./videos-master/videos-master.component";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";
import {VideoListComponent} from "./video-list/video-list.component";
import {EncrollComponent} from "./encroll/encroll.component";


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {
      path: '',
      component: IndexComponent,
    },
    {
      path: 'videoMaster',
      component: VideosMasterComponent,
    },
    {
      path: 'videoList',
      component: VideoListComponent,
    },
    {
      path: 'teachers',
      component: TeacherListComponent,
    },
    {
      path: 'enroll',
      component: EncrollComponent,
    },


  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
