import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameAndPhotoComponent } from './name-and-photo/name-and-photo.component';
import { GithubLinkComponent } from './github-link/github-link.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NameFormatPipe } from './name-format.pipe';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    NameAndPhotoComponent,
    GithubLinkComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ContactsComponent,
    NameFormatPipe,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
