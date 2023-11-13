import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designacoes-list',
  templateUrl: './designacoes-list.component.html',
  styleUrls: ['./designacoes-list.component.scss']
})
export class DesignacoesListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToDesignacoesCreate(): void{
    this.router.navigate(['/designacoes/create']);
  }
}
