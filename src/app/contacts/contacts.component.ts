// contact-details.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  email = 'example@email.com';
  phone = '555-555-5555';
  location = 'San Francisco, CA';

  constructor() { }

  ngOnInit() {
  }
}
