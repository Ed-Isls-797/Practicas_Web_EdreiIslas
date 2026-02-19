import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Alumnos } from '../services/alumnos';
declare var bootstrap: any;
@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  constructor(private alumno: Alumnos) {}
  guardarAlumno(form: any) {
    if (form.invalid) return;
    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera,
    };
    this.alumno.insertarAlumno(nuevoAlumno).subscribe({
      next: () => {
        alert('Evento agregado correctamente');
        form.reset();
      },
      error: (err) => {
        console.error('Error al insertar:', err);
      },
    });
  }
}
