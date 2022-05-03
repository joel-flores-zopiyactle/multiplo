import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Multiplo } from './models/multiplo.model';
import { MultiploService } from './services/multiplo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

   

  constructor() {}

  

}


/* 

Instrucciones
Para este ejercicio necesitamos que desarrolles una aplicación que:
1. Reciba un parámetro numérico por parte del usuario
2. Encuentre los múltiplos del 3, 5 y 7 que existan entre el 0 y el número que ingresó el usuario
3. Desplegar en pantalla los números encontrados en una lista con las siguientes características:
a. Múltiplos del 3 en VERDE
b. Múltiplos de 5 en ROJO
c. Múltiplos de 7 en AZUL
d. Si un número tiene más de un múltiplo deberá aparecer en el color del menor múltiplo y
a un lado los múltiplos de este.

4. Guardar la petición y el resultado en la base de datos
Ejemplo:
Número ingresado: 21
Resultado:
21 [3 y 7] (en VERDE porque 3 es
el múltiplo menor)
*/