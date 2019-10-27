import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearchUser } from '../git-search-user';

@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {
  searchUserResult: GitSearchUser;
  searchQuery: string;
  displayQuery: string;
  queryError: boolean;

  constructor(private GitSearchService: GitSearchService) {
    this.queryError = false;
  }

  ngOnInit() {
    this.searchQuery = 'meisimo';
    this.displayQuery = this.searchQuery;
    this.gitSearchUser();
  }

  gitSearchUser = () => {
    this.GitSearchService
      .gitSearchUser(this.searchQuery)
      .then(
        this.successResponse,
        this.failureResponse
      )
  }

  successResponse = response => {
    this.searchUserResult = response;
    this.displayQuery = this.searchQuery;
    this.queryError = false;
  }

  failureResponse = error => {
    this.queryError = true;
    this.displayQuery = 'Error';
  }
}
