import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.scss']
})
export class PaisesListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToPaisesCreate(): void{
    this.router.navigate(['/paises/create']);
  }
}
