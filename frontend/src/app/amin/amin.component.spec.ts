import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminComponent } from './amin.component';

describe('AminComponent', () => {
  let component: AminComponent;
  let fixture: ComponentFixture<AminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
