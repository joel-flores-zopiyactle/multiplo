import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiploService } from 'src/app/services/multiplo.service';

@Component({
  selector: 'app-form-multiplo',
  templateUrl: './form-multiplo.component.html',
  styleUrls: ['./form-multiplo.component.css']
})
export class FormMultiploComponent implements OnInit {
  multiploForm: FormGroup = this.fb.group({
    input: [0, Validators.required]   
  })

  multiplos:number[] = [3,5,7];
  textColor:string = '';
  result:number[] = [];
  history:any[] = [];
  messageAlert = ''

  constructor(private fb:FormBuilder, private multiploService: MultiploService) { }

  ngOnInit(): void {
  }

  // Vefica si un número es multiplo de un valor
  verifyMultiplo():void {

    const {input} = this.multiploForm.value;

    if(input === 0) {
      alert('Ingrese un número mayor a 0')
      return 
    }

    // Inicio el arreglo en un array vacío
    this.result = []; 
    this.messageAlert = ''
    
    // Recorre el array de multiplos
    this.multiplos.forEach( m => {
      
      let resultValues = []
    
      for (let i = 0; i < input; i+= m) {
        //  Si el resultado es 0, i es multiplo de la entrada
        if((input % i) === 0) {
            resultValues.push(i)
        }        
      }

      this.result.push(...resultValues)
      resultValues = []   
    }) 

    // Asigno el color del tipo de multiplo
    this.textColor = this.multiploService.changeColorText(this.result)
    
    this.result.length > 0 ? 
    this.saveMultiplo(input) : 
    this.messageAlert = `No hay múltiplo para el valor ${input} que ingreso`
}


  // Guarda los resultados a la bd
  async saveMultiplo(input:number) {
    try{

      const payload = {
        number: input,
        multiplos: this.result,
      };

      await this.multiploService.registerMultiplo(payload);
      
    } catch(e) {
      this.messageAlert = `No se pudo llevar a cabo la operación con exito`
      console.log(e)
    }

  }

}
