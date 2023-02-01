// name-and-photo.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-and-photo',
  templateUrl: './name-and-photo.component.html',
  styleUrls: ['./name-and-photo.component.css']
})
export class NameAndPhotoComponent implements OnInit {
  profilePicUrl = "/assets/profilepic.jpeg";
  constructor() { }

  ngOnInit() {
  }
}
