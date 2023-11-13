import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designacoes-create',
  templateUrl: './designacoes-create.component.html',
  styleUrls: ['./designacoes-create.component.scss']
})
export class DesignacoesCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/designacoes'])
  }
}
