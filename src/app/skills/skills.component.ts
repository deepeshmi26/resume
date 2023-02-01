// skills.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = ['JavaScript', 'Angular', 'TypeScript', 'HTML', 'CSS'];

  constructor() { }

  ngOnInit() {
  }
}
