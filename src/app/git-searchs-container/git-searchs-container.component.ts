import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-git-searchs-container',

  templateUrl: './git-searchs-container.component.html',
  styleUrls: ['./git-searchs-container.component.css']
})
export class GitSearchsContainerComponent implements OnInit {
  currentPage: number;
  @ViewChild("outlet", {read: ViewContainerRef, static: true}) outletRef: ViewContainerRef;
  @ViewChild("content", {read: TemplateRef, static: true}) contentRef: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const page = Number(
      this
        .route
        .snapshot
        .paramMap
        .get('page')
    );
    this.currentPage = page ? page : 1;
  }

  ngAfterContentInit() {
    this
      .outletRef
      .createEmbeddedView(this.contentRef);
  }

  private reRender(){
    this
      .outletRef
      .clear();
    this
      .outletRef
      .createEmbeddedView(this.contentRef);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.navigateToCurrentPage();
  }

  prevPage() {
    this.currentPage = this.currentPage - 1;
    if (!this.currentPage) {
      this.currentPage = 1;
    }
    this.navigateToCurrentPage();
  }

  private navigateToCurrentPage() {
    this
      .router
      .navigate(['/git', this.currentPage]);
    this.reRender();
  }
}
