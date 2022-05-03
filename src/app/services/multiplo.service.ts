import { Injectable } from '@angular/core';

// Importamos los módulos para DB con Firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
// Importamos el modelo
import { Multiplo } from '../models/multiplo.model';

@Injectable({
  providedIn: 'root'
})
export class MultiploService {

  constructor(private angularFirestore: AngularFirestore) { }

  // Firebase
  getMultiplos() {
    return this.angularFirestore
    .collection('multiplos')
    .snapshotChanges()
  }

  registerMultiplo(multiplo:Multiplo) {
    return new Promise<any> ((resolve, reject) => {
      this.angularFirestore.collection('multiplos').add(multiplo)
      .then( res => {
        resolve(res)
      }),
      (err:any) => {
        reject(err)
      }
    })
  }

  // Asigna los colores a los multiplos de [3,5,7]
  changeColorText(result:any):string {

    if(result[0] === 3) {
      return  'text-success'
    }        
    if(result[0] === 5) {
      return 'text-danger'
    }        
    if(result[0] === 7) {
      return 'text-primary'
    }
    
    return ''

  }


}
