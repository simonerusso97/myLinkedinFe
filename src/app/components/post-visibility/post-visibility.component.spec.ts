import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVisibilityComponent } from './post-visibility.component';

describe('PostVisibilityComponent', () => {
  let component: PostVisibilityComponent;
  let fixture: ComponentFixture<PostVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostVisibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
