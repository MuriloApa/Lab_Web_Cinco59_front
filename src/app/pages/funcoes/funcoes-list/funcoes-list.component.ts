import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcoes-list',
  templateUrl: './funcoes-list.component.html',
  styleUrls: ['./funcoes-list.component.scss']
})
export class FuncoesListComponent implements OnInit {

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToFuncoesCreate(): void{
    this.router.navigate(['/funcoes/create']);
  }
}
