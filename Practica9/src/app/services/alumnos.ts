import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Alumnos {
  private API = 'http://127.0.0.1:5000/alumnos';
constructor(private http: HttpClient) {}

insertarAlumno(alumno: any){
  return this.http.post(this.API, alumno);
}

obtenerAlumnos(){
  return this.http.get(this.API);
}

}
