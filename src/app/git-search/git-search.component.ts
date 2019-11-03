import { Component, OnInit, Input } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  @Input() currentPage: number;
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;
  queryError: boolean;
  msgError: string;

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
      .gitSearch(this.searchQuery, this.currentPage)
      .then(
        this.successResponse,
        this.failureResponse
      )
  }

  successResponse = response => {
    this.searchResults = response;
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
