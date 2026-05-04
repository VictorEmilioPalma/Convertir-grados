import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNombre } from './intro-nombre';

describe('IntroNombre', () => {
  let component: IntroNombre;
  let fixture: ComponentFixture<IntroNombre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroNombre],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroNombre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
