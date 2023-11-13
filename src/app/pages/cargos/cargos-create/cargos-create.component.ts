import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargos-create',
  templateUrl: './cargos-create.component.html',
  styleUrls: ['./cargos-create.component.scss']
})
export class CargosCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/cargos'])
  }
}
