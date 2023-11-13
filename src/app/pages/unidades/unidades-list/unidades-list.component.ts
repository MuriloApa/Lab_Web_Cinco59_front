import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-list',
  templateUrl: './unidades-list.component.html',
  styleUrls: ['./unidades-list.component.scss']
})
export class UnidadesListComponent implements OnInit {

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToUnidadesCreate(): void{
    this.router.navigate(['/unidades/create']);
  }
}
