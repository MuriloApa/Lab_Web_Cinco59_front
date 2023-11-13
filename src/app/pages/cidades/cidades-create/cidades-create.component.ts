import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades-create',
  templateUrl: './cidades-create.component.html',
  styleUrls: ['./cidades-create.component.scss']
})
export class CidadesCreateComponent implements OnInit {

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/cidades'])
  }
}
