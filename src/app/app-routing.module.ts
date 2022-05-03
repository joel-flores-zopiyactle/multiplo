import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormMultiploComponent } from './components/form-multiplo/form-multiplo.component';
import { ListMultiplosComponent } from './components/list-multiplos/list-multiplos.component';

const routes: Routes = [
    {
        path: '',
        component: FormMultiploComponent,
        pathMatch: 'full'
    },

    {
        path: 'list-multiplos',
        component: ListMultiplosComponent
    }, 
    
    {
        path: '**',
        redirectTo: ''
    }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }