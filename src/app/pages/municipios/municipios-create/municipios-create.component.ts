import { MunicipiosService } from './../municipios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from '../../estados/estados.service';
import { Estado } from 'src/app/models/estado.model';

@Component({
  selector: 'app-municipios-create',
  templateUrl: './municipios-create.component.html',
  styleUrls: ['./municipios-create.component.scss'],
})
export class MunicipiosCreateComponent implements OnInit {
  estados: Estado[] = [];

  constructor(
    private readonly router: Router,
    private readonly municipiosService: MunicipiosService,
    private readonly estadosService: EstadosService,
  ) {}

  ngOnInit(): void {
    this.estadosService.list().subscribe((resp) => this.estados = resp);
  }

  save(): void {
    this.municipiosService.showMessage('Município cadastrado com sucesso!');
  }

  cancel(): void {
    this.router.navigate(['/municipios']);
  }
}
