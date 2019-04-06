import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
public StudentList:Student[];
  constructor() { 
this.StudentList = [new Student("Temur", "Tsertsvadze", "12319213", 2000),
new Student("Davit", "nasdads", "1237831", 23232)
];


}
  ngOnInit() {
  }

}
export class Student {
  // name: string;
  // surname: string;
  // ID: number | string;
  // sallary ?: string;
  constructor(public name: string, public surname: string, public ID: number | string, public sallary: number){

  }

}

