import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afastamentos-list',
  templateUrl: './afastamentos-list.component.html',
  styleUrls: ['./afastamentos-list.component.scss']
})
export class AfastamentosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToAfastamentosCreate(): void{
    this.router.navigate(['/afastamentos/create']);
  }
}
