import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro-nombre',
  imports: [FormsModule],
  templateUrl: './intro-nombre.html',
  styleUrl: './intro-nombre.css',
})
export class IntroNombre {


  

    tempNombre: string = '';
    
    saludo = signal('Hola, ');
    nombre = signal('Introduce tu nombre');
    saludoOutPut = "";

  
  borrarSaludo(): void{

    console.log(this.tempNombre)
   
    let saludoRandom = Math.floor(Math.random()*3)+1

    switch(saludoRandom){
      case 1: this.saludo.update((value) => "Muy buenas, ");
      break;
      case 2: this.saludo.update((value) => "Que onda, ");
      break;
      case 3: this.saludo.update((value) => "Tiempo sin verte, ");
      break;
    }
    
    
  }



}
