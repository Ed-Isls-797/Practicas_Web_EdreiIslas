import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Eliminar } from './components/eliminar/eliminar';
import { Formulario } from './components/formulario/formulario';
import { Actualizar } from './components/actualizar/actualizar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'eliminar', component: Eliminar },
  { path: 'agregar', component: Formulario },
  { path: 'actualizar/:id', component: Actualizar }

];