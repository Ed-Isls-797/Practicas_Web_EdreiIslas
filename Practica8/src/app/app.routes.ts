import { Routes } from '@angular/router';
import { Eventos } from './tabla/tabla';

export const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' },
  { path: 'eventos', component: Eventos },
  { path: '**', redirectTo: 'eventos' }
];