import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from '../../services/game';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  game = {
    nombre: '',
    genero: '',
    precio: 0,
    imagenUrl: ''
  };

  constructor(
    private gameService: Game,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit() {
    this.gameService.createGame(this.game).subscribe(() => {
      this.cdr.detectChanges();
      this.router.navigate(['/']);
    });
  }
}