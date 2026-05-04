import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mileskilometers } from './mileskilometers';

describe('Mileskilometers', () => {
  let component: Mileskilometers;
  let fixture: ComponentFixture<Mileskilometers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mileskilometers],
    }).compileComponents();

    fixture = TestBed.createComponent(Mileskilometers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
