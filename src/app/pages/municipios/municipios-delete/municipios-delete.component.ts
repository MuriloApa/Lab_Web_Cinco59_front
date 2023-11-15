import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Municipio } from 'src/app/models/municipio.model';

@Component({
  selector: 'app-municipios-delete',
  templateUrl: './municipios-delete.component.html',
  styleUrls: ['./municipios-delete.component.scss']
})
export class MunicipiosDeleteComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: Municipio) {}

  ngOnInit(): void {

  }

}
