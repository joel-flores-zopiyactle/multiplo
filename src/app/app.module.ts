import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

// Importamos las clases para trabajar con firestore
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

// Importamos la configuración de firebase
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { FormMultiploComponent } from './components/form-multiplo/form-multiplo.component';
import { ListMultiplosComponent } from './components/list-multiplos/list-multiplos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMultiploComponent,
    ListMultiplosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Psamos la configuración de firebases
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
