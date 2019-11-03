import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchsContainerComponent } from './git-searchs-container.component';

describe('GitSearchsContainerComponent', () => {
  let component: GitSearchsContainerComponent;
  let fixture: ComponentFixture<GitSearchsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
