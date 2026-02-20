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
    carrera: form.value.carrera 
  };

  this.alumno.insertarAlumno(nuevoAlumno).subscribe({ 
    next: () => {
      // En lugar del alert[cite: 326], lanzamos el modal
      const modalElement = document.getElementById('successModal');
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
      
      form.reset(); 
    },
    error: (err) => {
      console.error("Error al insertar:", err); 
    }
  });
}
}
