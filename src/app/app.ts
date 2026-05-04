import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Farenheitcelsius } from './farenheitcelsius/farenheitcelsius';
import { Inchescentimeters } from './inchescentimeters/inchescentimeters';
import { Mileskilometers } from './mileskilometers/mileskilometers';
import { IntroNombre } from './intro-nombre/intro-nombre';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Farenheitcelsius, Inchescentimeters, Mileskilometers, IntroNombre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Convertir');
}
