import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";
import {IndexComponent} from "./index/index.component";
import {VideosMasterComponent} from "./videos-master/videos-master.component";
import {TeacherListComponent} from "./teacher-list/teacher-list.component";
import {VideoListComponent} from "./video-list/video-list.component";
import {EncrollComponent} from "./encroll/encroll.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleResolver} from "../../shared/service/resolver/article-resolver.service";
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course/course-list/course-list.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'videoMaster',
        component: VideosMasterComponent,
      },
      {
        path: 'videoList/:type',
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
      {
        path: 'article/:id',
        component: ArticleComponent,
        resolve: {
          ArticleInfos: ArticleResolver
        }
      },
      {
        path: 'course',
        component: CourseComponent,
        loadChildren: 'app/main/home/course/course.module#CourseModule',
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ArticleResolver]
})

export class HomeRoutingModule {
}
