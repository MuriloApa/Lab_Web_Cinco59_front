import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Indisponibilidade } from 'src/app/models/indisponibilidade.model';

@Component({
  selector: 'app-indisponibilidades-delete',
  templateUrl: './indisponibilidades-delete.component.html',
  styleUrls: ['./indisponibilidades-delete.component.scss']
})
export class IndisponibilidadesDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Indisponibilidade) {}

  ngOnInit(): void {

  }
}
