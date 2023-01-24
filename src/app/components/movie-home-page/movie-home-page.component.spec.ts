import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomePageComponent } from './movie-home-page.component';

describe('MovieHomePageComponent', () => {
  let component: MovieHomePageComponent;
  let fixture: ComponentFixture<MovieHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
