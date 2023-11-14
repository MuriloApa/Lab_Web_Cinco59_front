import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcoes-create',
  templateUrl: './funcoes-create.component.html',
  styleUrls: ['./funcoes-create.component.scss']
})
export class FuncoesCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/funcoes'])
  }
}
