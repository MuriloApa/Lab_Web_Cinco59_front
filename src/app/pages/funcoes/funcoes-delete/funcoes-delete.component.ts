import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcao } from 'src/app/models/funcao.model';

@Component({
  selector: 'app-funcoes-delete',
  templateUrl: './funcoes-delete.component.html',
  styleUrls: ['./funcoes-delete.component.scss']
})
export class FuncoesDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Funcao) {}

  ngOnInit(): void {

  }
}
