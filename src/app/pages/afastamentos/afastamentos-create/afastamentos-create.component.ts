import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afastamentos-create',
  templateUrl: './afastamentos-create.component.html',
  styleUrls: ['./afastamentos-create.component.scss']
})
export class AfastamentosCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/afastamentos'])
  }
}
