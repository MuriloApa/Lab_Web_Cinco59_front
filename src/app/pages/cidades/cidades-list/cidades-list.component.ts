import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades-list',
  templateUrl: './cidades-list.component.html',
  styleUrls: ['./cidades-list.component.scss']
})
export class CidadesListComponent implements OnInit {

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToCidadeCreate(): void{
    this.router.navigate(['/cidades/create']);
  }
}
