import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { GitSearchUser } from './git-search-user'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor(private http: HttpClient) { }

  gitSearch = (repositoryName:string, page:number):Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve,reject)=>{
      if(this.cachedValues[repositoryName]){
        resolve(this.cachedValues[repositoryName]);
      }else{
        this.http
          .get(`https://api.github.com/search/repositories?q=${repositoryName}&page=${page}`)
          .toPromise()
         .then(
            response => resolve(response as GitSearch),
            error    => reject(error)
          )
      }
    })
    return promise
  }

  gitSearchUser = (userName:string, page:number):Promise<GitSearchUser> => {
    let promise = new Promise<GitSearchUser>((resolve,reject)=>{
      if(this.cachedValues[userName]){
        resolve(this.cachedValues[userName]);
      }else{
        this.http
          .get(`https://api.github.com/search/users?q=${userName}&page=${page}`)
          .toPromise()
          .then(
            (response)=>{ resolve(response as GitSearchUser)},
            (error)   =>{ reject(error) }
          )
      }
    })
    return promise
  }
}
