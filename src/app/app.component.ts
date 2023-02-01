import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { GithubLinkComponent } from './github-link/github-link.component';
import { NameAndPhotoComponent } from './name-and-photo/name-and-photo.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
}
