import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LessonsDatabaseService } from "./lessons-database.service";
import { Lesson } from "../../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-second-l-lessons',
  templateUrl: './second-layer-lessons.html',
  styleUrls: ['./second-layer-lessons.css']
})



export class SecondLayerLessons implements OnInit {

  lessons: Lesson[] = [
    {id: '001', title: '1', value: '22'},
    {id: '002', title: '2', value: '44'},
    {id: '003', title: '3', value: '66'},
  ]

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dataLessons: LessonsDatabaseService
  ) {
  }

  ngOnInit(): void {
    // this.lessons = this.dataLessons.getLesson()
    console.log(this.lessons)
  }

  showDetailsTheme(lesson: any){
    this.router.navigate(['theory', lesson.id])
    console.log('id', lesson.id)
    console.log('lesson:', lesson.value)
  }

  goBack(){
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }

}
