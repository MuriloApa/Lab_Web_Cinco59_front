import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indisponibilidades-create',
  templateUrl: './indisponibilidades-create.component.html',
  styleUrls: ['./indisponibilidades-create.component.scss']
})
export class IndisponibilidadesCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/indisponibilidades'])
  }
}
