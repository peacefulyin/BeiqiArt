import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseRoutingModule} from "./course.routing.module";
import {CourseComponent} from "./course.component";
import { CourseListComponent } from './course-list/course-list.component';
import {ProListCardComponent} from "../../../components/pro-list-card/pro-list-card.component";
import {CourseDetailComponent} from "./course-detail/course-detail.component";
import {CourseResolver} from "../../../shared/service/resolver/course-resolver.service";
import {CourseService} from "../../../shared/api/main/course.service";
import {CommonCardComponent} from "../../../components/common-card/common-card.component";
import {ComponentsModule} from "../../../shared/components.module";
import {TransUrlPipe} from "../../../shared/pipe/trans-url.pipe";

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    ComponentsModule
  ],
  declarations: [
    CourseComponent,
    CourseListComponent,
    ProListCardComponent,
    CourseDetailComponent,
    CommonCardComponent,
    // 待删除
    TransUrlPipe,
  ],
  providers: [
    CourseResolver,
    CourseService,
  ],
  exports: [
    CourseComponent,
    CourseListComponent,
    ProListCardComponent,
    CourseDetailComponent,
    CommonCardComponent,
  ]
})
export class CourseModule { }
