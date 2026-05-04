import { Component, OnInit } from '@angular/core'; //OnInit se usa pa que todo los componentes tengan su propia id
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-farenheitcelsius',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './farenheitcelsius.html',
  styleUrl: './farenheitcelsius.css',
})

export class Farenheitcelsius implements OnInit {
  valor: number | null = null;
  tipo: string = '';
  resultado: number | null = null;
  
  // ID único para este componente
  componentId: string = '';
 
  ngOnInit(): void {
    // Generar un ID único basado en timestamp + random
    this.componentId = `fac-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
 
  onValorChange(event: any): void {
    this.valor = parseFloat(event.target.value);
  }
 
  onTipoChange(event: any): void {
    this.tipo = event.target.value;
  }
 
  calcular(): void {
    if (this.valor === null || this.valor === undefined) {
      return;
    }
 
    if (!this.tipo) {
      return;
    }
 
    if (this.tipo === 'fac') {
      this.resultado = (this.valor - 32) * 5 / 9;
    } else if (this.tipo === 'caf') {
      this.resultado = (this.valor * 9 / 5) + 32;
    }
  }
}
 