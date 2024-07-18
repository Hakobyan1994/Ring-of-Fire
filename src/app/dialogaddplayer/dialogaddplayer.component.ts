import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogaddplayer',
  standalone: true,
  imports: [MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule],
  templateUrl: './dialogaddplayer.component.html',
  styleUrl: './dialogaddplayer.component.scss'
})
export class DialogaddplayerComponent {
  name: string = '';


  constructor(public dialogRef: MatDialogRef<DialogaddplayerComponent>,
  ) { }


  onNoClick() {

    this.dialogRef.close();

  }

}
