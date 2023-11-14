import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servidores-create',
  templateUrl: './servidores-create.component.html',
  styleUrls: ['./servidores-create.component.scss']
})
export class ServidoresCreateComponent implements OnInit{

  constructor(private readonly router: Router){}

  ngOnInit(): void {

  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['/servidores'])
  }
}
