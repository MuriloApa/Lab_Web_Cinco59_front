import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo.model';

@Component({
  selector: 'app-cargos-delete',
  templateUrl: './cargos-delete.component.html',
  styleUrls: ['./cargos-delete.component.scss']
})
export class CargosDeleteComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: Cargo) {}

  ngOnInit(): void {

  }
}
