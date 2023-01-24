import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrailerListComponent } from './movie-trailer-list.component';

describe('MovieTrailerListComponent', () => {
  let component: MovieTrailerListComponent;
  let fixture: ComponentFixture<MovieTrailerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTrailerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTrailerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
