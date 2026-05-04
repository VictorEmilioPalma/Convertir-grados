import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Farenheitcelsius } from './farenheitcelsius';

describe('Farenheitcelsius', () => {
  let component: Farenheitcelsius;
  let fixture: ComponentFixture<Farenheitcelsius>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Farenheitcelsius],
    }).compileComponents();

    fixture = TestBed.createComponent(Farenheitcelsius);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
