import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogaddplayerComponent } from '../dialogaddplayer/dialogaddplayer.component';
import { GameinfoComponent } from "../gameinfo/gameinfo.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    DialogaddplayerComponent,
    GameinfoComponent
],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game = new Game();
  currentCard: string | undefined = '';

  constructor(public dialog: MatDialog) {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard)
      this.pickCardAnimation = true;
      this.game.currentPlayer++
      this.game.currentPlayer=  this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard || '');
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open<DialogaddplayerComponent, any, any>(DialogaddplayerComponent);
    dialogRef.afterClosed().subscribe((name:string) => {
        if(name && name.length > 0){
        this.game.players.push(name);
      }
    });
  }
}