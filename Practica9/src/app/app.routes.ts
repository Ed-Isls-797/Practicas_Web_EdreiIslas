import { Routes } from '@angular/router';
import { Consulta } from './consulta/consulta';
import { Formulario } from './formulario/formulario';
export const routes: Routes = [
    {path: '',component: Consulta},
    {path: 'consulta',component: Consulta},
    {path: '',component: Formulario},
    {path: 'formulario',component: Formulario}
];
