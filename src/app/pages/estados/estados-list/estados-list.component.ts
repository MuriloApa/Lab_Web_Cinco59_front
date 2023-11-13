import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estados-list',
  templateUrl: './estados-list.component.html',
  styleUrls: ['./estados-list.component.scss']
})
export class EstadosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToEstadosCreate(): void{
    this.router.navigate(['/estados/create']);
  }
}
