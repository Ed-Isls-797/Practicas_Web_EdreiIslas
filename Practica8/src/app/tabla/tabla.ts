import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EventosService } from '../services/eventos';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tabla.html'
})
export class Eventos implements OnInit {

  listaEventos: any[] = [];

  constructor(private eventosService: EventosService) {}

  ngOnInit() {
    this.eventosService.obtenerEventos()
      .subscribe(data => {
        this.listaEventos = data as any[];
      });
  }
}
