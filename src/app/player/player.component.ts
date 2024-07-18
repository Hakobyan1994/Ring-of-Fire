import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
 @Input()name=''; // Nutzung von child zu Parent Component;
 @Input()playerActive :boolean=false; // Nutzung von child zu Parent Component;
}
