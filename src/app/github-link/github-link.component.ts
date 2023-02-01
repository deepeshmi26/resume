// github-link.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-github-link',
  templateUrl: './github-link.component.html',
  styleUrls: ['./github-link.component.css']
})
export class GithubLinkComponent implements OnInit {
  repositories = this.http.get<any[]>('https://api.github.com/users/deepeshmi26/repos')
    .pipe(
      map(response => response)
    );
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //  this.repositories = this.http.get('https://api.github.com/users/YOUR_USERNAME/repos');
  }
}
