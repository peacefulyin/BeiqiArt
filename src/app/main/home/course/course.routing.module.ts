import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseListComponent} from "./course-list/course-list.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseResolver} from "../../../shared/service/resolver/course-resolver.service";

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {
    path: ':value',
    component: CourseDetailComponent,
    resolve: {
      courseInfos: CourseResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CourseRoutingModule {
}
