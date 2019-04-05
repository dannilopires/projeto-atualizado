import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaMaeComponent } from './pla-mae.component';

describe('PlaMaeComponent', () => {
  let component: PlaMaeComponent;
  let fixture: ComponentFixture<PlaMaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaMaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaMaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
