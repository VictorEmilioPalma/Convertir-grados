import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inchescentimeters } from './inchescentimeters';

describe('Inchescentimeters', () => {
  let component: Inchescentimeters;
  let fixture: ComponentFixture<Inchescentimeters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inchescentimeters],
    }).compileComponents();

    fixture = TestBed.createComponent(Inchescentimeters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
