import { Component } from '@angular/core';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent {

  texto: string = 'teste';

  date = new Date;

  keyUp(valor: any){
    this.texto = valor;
  }
}
