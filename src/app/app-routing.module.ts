import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchsContainerComponent } from './git-searchs-container/git-searchs-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'git',
    component: GitSearchsContainerComponent
  }, 
  {
    path: 'git/:page',
    component: GitSearchsContainerComponent
  },
  {
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
