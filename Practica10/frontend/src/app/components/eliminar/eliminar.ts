import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eliminar.html'
})
export class Eliminar implements OnInit {

  games: any[] = [];

  constructor(
    private gameService: Game,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getGames().subscribe(data => {
      this.games = data;
      this.cdr.detectChanges();
    });
  }

  deleteGame(id: string) {
    this.gameService.deleteGame(id).subscribe(() => {
      this.loadGames();
    });
  }
}