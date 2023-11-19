import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genero } from 'src/app/models/genero.model';

@Component({
  selector: 'app-generos-delete',
  templateUrl: './generos-delete.component.html',
  styleUrls: ['./generos-delete.component.scss']
})
export class GenerosDeleteComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: Genero) {}

  ngOnInit(): void {

  }
}
