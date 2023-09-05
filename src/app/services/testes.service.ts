import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  constructor() { }

  getCurso() {
    return ['Java', 'Angular', 'Ext JS', 'React'];
  }

  somar(valor1: number, valor2: number){
    return valor1 + valor2;
  }
}
