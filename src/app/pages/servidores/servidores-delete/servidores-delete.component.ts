import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Servidor } from 'src/app/models/servidor.model';

@Component({
  selector: 'app-servidores-delete',
  templateUrl: './servidores-delete.component.html',
  styleUrls: ['./servidores-delete.component.scss']
})
export class ServidoresDeleteComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: Servidor) {}

  ngOnInit(): void {

  }
}
