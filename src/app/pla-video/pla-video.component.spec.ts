import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaVideoComponent } from './pla-video.component';

describe('PlaVideoComponent', () => {
  let component: PlaVideoComponent;
  let fixture: ComponentFixture<PlaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
