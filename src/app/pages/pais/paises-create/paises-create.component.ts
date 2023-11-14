import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises-create',
  templateUrl: './paises-create.component.html',
  styleUrls: ['./paises-create.component.scss']
})
export class PaisesCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/paises'])
  }
}
