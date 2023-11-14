import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terceirizados-create',
  templateUrl: './terceirizados-create.component.html',
  styleUrls: ['./terceirizados-create.component.scss']
})
export class TerceirizadosCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/terceirizados'])
  }
}
