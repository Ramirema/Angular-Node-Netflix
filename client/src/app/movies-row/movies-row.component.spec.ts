import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesRowComponent } from './movies-row.component';

describe('MoviesRowComponent', () => {
  let component: MoviesRowComponent;
  let fixture: ComponentFixture<MoviesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
