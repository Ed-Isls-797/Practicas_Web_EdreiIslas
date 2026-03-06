import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.html'
})
export class Actualizar implements OnInit {

  game: any = {
    nombre: '',
    genero: '',
    imagenUrl: ''
  };

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: Game,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {

  this.id = this.route.snapshot.paramMap.get('id') || '';

  this.gameService.getGames().subscribe(data => {

    const juego = data.find((g:any) => g._id === this.id);

    if (juego) {
      this.game = juego;
    }

    this.cdr.detectChanges();
  });

}

 modalVisible = false;

actualizarJuego() {

  this.gameService.updateGame(this.id, this.game)
  .subscribe(() => {

    this.modalVisible = true;

  });

}

volverHome() {
  this.router.navigate(['/']);
}

}