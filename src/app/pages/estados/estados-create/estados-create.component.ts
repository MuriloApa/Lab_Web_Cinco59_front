import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estados-create',
  templateUrl: './estados-create.component.html',
  styleUrls: ['./estados-create.component.scss']
})
export class EstadosCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/estados'])
  }
}
