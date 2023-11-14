import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipios-list',
  templateUrl: './municipios-list.component.html',
  styleUrls: ['./municipios-list.component.scss']
})
export class MunicipiosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToCargosCreate(): void{
    this.router.navigate(['/municipios/create']);
  }
}
