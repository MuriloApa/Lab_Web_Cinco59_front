import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unidade } from 'src/app/models/unidade.model';

@Component({
  selector: 'app-unidades-delete',
  templateUrl: './unidades-delete.component.html',
  styleUrls: ['./unidades-delete.component.scss']
})
export class UnidadesDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Unidade) {}

  ngOnInit(): void {

  }

}
