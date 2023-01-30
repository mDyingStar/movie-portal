import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrailerCardComponent } from './movie-trailer-card.component';

describe('MovieTrailerCardComponent', () => {
  let component: MovieTrailerCardComponent;
  let fixture: ComponentFixture<MovieTrailerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTrailerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTrailerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
