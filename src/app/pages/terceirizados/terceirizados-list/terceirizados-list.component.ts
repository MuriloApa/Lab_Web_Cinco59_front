import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terceirizados-list',
  templateUrl: './terceirizados-list.component.html',
  styleUrls: ['./terceirizados-list.component.scss']
})
export class TerceirizadosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToTerceirizadosCreate(): void{
    this.router.navigate(['/terceirizados/create']);
  }
}
