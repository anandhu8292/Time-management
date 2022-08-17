import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UminComponent } from './umin.component';

describe('UminComponent', () => {
  let component: UminComponent;
  let fixture: ComponentFixture<UminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
