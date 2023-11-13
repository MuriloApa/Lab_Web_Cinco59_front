import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos-list',
  templateUrl: './generos-list.component.html',
  styleUrls: ['./generos-list.component.scss']
})
export class GenerosListComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  navigateToGenerosCreate(): void{
    this.router.navigate(['/generos/create']);
  }
}
