import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargos-list',
  templateUrl: './cargos-list.component.html',
  styleUrls: ['./cargos-list.component.scss']
})
export class CargosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToCargosCreate(): void{
    this.router.navigate(['/cargos/create']);
  }
}
