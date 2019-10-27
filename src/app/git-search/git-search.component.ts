import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  queryError: boolean;

  constructor(private GitSearchService: GitSearchService) {
    this.queryError = false;
  }

  ngOnInit() {
    this.searchQuery = 'pedro';
    this.displayQuery = this.searchQuery;
    this.gitSearch();
  }

  gitSearch = () => {
    this.GitSearchService
      .gitSearch(this.searchQuery)
      .then(
        this.successResponse,
        this.failureResponse
      )
  }

  successResponse = response => {
    this.searchResults = response;
    this.displayQuery = this.searchQuery;
    this.queryError = false;
  }

  failureResponse = error => {
    this.queryError = true;
    this.displayQuery = 'Error';
  }
}
