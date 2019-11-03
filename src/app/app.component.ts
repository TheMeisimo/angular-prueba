import { Component } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }
  constructor(private GitSearchService: GitSearchService) {
  }
  
}
