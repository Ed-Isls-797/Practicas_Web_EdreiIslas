import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../services/game';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class Home implements OnInit {

  games: any[] = [];

  constructor(
    private gameService: Game,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
  this.gameService.getGames().subscribe(data => {

    this.games = data.map(game => ({
  ...game,
  safeImage: game.imagenUrl 
    ? this.sanitizer.bypassSecurityTrustUrl(game.imagenUrl)
    : 'https://via.placeholder.com/300'
}));

    this.cdr.detectChanges();
  });
}
}