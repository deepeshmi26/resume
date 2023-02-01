// work-experience.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  jobs = [
    {
      title: 'Software Engineer',
      company: 'Google',
      description: 'Worked on developing new features for Google Search',
      startDate: 'January 2020',
      endDate: 'Present'
    },
    {
      title: 'Full Stack Developer',
      company: 'Facebook',
      description: 'Worked on developing and maintaining the Facebook website',
      startDate: 'June 2017',
      endDate: 'December 2019'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
