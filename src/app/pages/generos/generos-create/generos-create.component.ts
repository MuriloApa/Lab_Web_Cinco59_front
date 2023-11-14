import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos-create',
  templateUrl: './generos-create.component.html',
  styleUrls: ['./generos-create.component.scss']
})
export class GenerosCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/generos'])
  }
}
