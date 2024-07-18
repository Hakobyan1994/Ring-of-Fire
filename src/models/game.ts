export class Game {
  //Es ist ein Objekt-Orientierte Programmierung, wo es um die Classe geht nach dem aktuellen Spiel.
  //Public schreibt man,dass man in anderen Dateien auf die Classe zugreifen kann.
  public players: string[] = [];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('ace_' + i) // oder kann man auch +1 schreiben
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }
    shuffle(this.stack)
  }
}


function shuffle(array: any) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
