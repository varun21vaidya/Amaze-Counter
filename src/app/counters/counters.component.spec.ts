import { ComponentFixture, TestBed } from '@angular/core/testing';

import { countersComponent } from './counters.component';

describe('countersComponent', () => {
  let component: countersComponent;
  let fixture: ComponentFixture<countersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [countersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(countersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
