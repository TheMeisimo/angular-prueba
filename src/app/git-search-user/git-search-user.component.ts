import { Component, OnInit, Input } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearchUser } from '../git-search-user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
  msgError: string;
  @Input() currentPage: number;

  constructor(
    private GitSearchService: GitSearchService,
    private route: ActivatedRoute
    ) {
    this.queryError = false;
  }

  ngOnInit() {
    this.searchQuery = 'pedro';
    this.displayQuery = this.searchQuery;
    this.gitSearchUser();
  }

  gitSearchUser = () => {
    this.GitSearchService
      .gitSearchUser(this.searchQuery, this.currentPage)
      .then(
        this.successResponse,
        this.failureResponse
      )
  }

  successResponse = response => {
    this.searchUserResult = response;
    this.displayQuery = this.searchQuery;
    this.queryError = false;
    this.msgError = '';
  }

  failureResponse = error => {
    this.queryError = true;
    switch ( error.status ) {
      case 422:
        this.msgError = 'Error en la consulta, por favor cambie el texto.'
        break;
      case 403:
        this.msgError = 'Error de la API de GIT, por favor vuelva a intentarlo en un momento.'
        break;
      default:
        this.msgError = 'Error desconocido u.u.'
        break;
    }
    this.displayQuery = 'Error';
  }
}
