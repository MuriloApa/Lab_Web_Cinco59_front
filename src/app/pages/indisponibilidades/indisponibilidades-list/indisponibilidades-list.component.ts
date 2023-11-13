import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indisponibilidades-list',
  templateUrl: './indisponibilidades-list.component.html',
  styleUrls: ['./indisponibilidades-list.component.scss']
})
export class IndisponibilidadesListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToIndisponibilidadesCreate(): void{
    this.router.navigate(['/indisponibilidades/create']);
  }
}
