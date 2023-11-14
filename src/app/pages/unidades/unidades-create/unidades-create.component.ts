import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-create',
  templateUrl: './unidades-create.component.html',
  styleUrls: ['./unidades-create.component.scss']
})
export class UnidadesCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }


  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/unidades'])
  }
}
