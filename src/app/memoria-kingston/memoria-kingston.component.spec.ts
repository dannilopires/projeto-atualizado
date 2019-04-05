import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaKingstonComponent } from './memoria-kingston.component';

describe('MemoriaKingstonComponent', () => {
  let component: MemoriaKingstonComponent;
  let fixture: ComponentFixture<MemoriaKingstonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriaKingstonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaKingstonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
