import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-paises-delete',
  templateUrl: './paises-delete.component.html',
  styleUrls: ['./paises-delete.component.scss']
})
export class PaisesDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Pais) {}

  ngOnInit(): void {

  }

}
