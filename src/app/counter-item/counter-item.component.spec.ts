import { ComponentFixture, TestBed } from '@angular/core/testing';

import { counterItemComponent } from './counter-item.component';

describe('counterItemComponent', () => {
  let component: counterItemComponent;
  let fixture: ComponentFixture<counterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [counterItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(counterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
