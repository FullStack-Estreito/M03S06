import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  nome: String = 'João';
  constructor() { }

  getCurso() {
    return ['Java', 'Angular', 'Ext JS', 'React'];
  }

  somar(valor1: number, valor2: number){
    return valor1 + valor2;
  }

  multiplicar(valor1: number, valor2: number){
    if(valor1 == 0){
      throw new Error("Informe um valor diferente de zero");
    }

    return valor1 * valor2;
  }

  dividir(valor1: number, valor2: number){
    if(valor2 == 0){
      throw new Error("Não é possível dividir por zero");
    }
    
    return valor1 / valor2;
  }
}
