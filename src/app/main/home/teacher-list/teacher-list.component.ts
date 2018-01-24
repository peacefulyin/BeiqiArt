import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../../shared/api/main/person.service";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  public teachers: Array<object>;

  constructor(private personService: PersonService) {
    this.getTeacher()
  }

  getTeacher() {
    this.personService.getTeachers().subscribe((data: Array<object>) => {
      this.teachers = data;
    });
  }

  ngOnInit() {
  }

}
