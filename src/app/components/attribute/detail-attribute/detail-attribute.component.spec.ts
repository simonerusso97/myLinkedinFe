import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAttributeComponent } from './detail-attribute.component';

describe('DetailAttributeComponent', () => {
  let component: DetailAttributeComponent;
  let fixture: ComponentFixture<DetailAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
