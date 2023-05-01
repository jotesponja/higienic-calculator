import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularios: any[] = [];

  agregarFormulario() {
    this.formularios.push({
      nombre: '',
      precio: 0,
      unidades: 0,
      metros: 0,
      resultado: null
    });
  }

  calcular(formulario: any) {
    formulario.resultado = formulario.precio / (formulario.metros * formulario.unidades);
  }
}