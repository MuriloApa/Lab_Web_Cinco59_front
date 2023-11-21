import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Afastamento } from 'src/app/models/afastamento.model';

@Component({
  selector: 'app-afastamentos-delete',
  templateUrl: './afastamentos-delete.component.html',
  styleUrls: ['./afastamentos-delete.component.scss']
})
export class AfastamentosDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Afastamento) {}

  ngOnInit(): void {

  }
}
