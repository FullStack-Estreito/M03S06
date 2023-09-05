import { TestBed } from '@angular/core/testing';

import { TestesService } from './testes.service';

describe('TestesService', () => {
  let service: TestesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //getCursos
  it( TestesService.prototype.somar.name +' deve somar dois números quando executado', 
  ()=>{
    let soma = service.somar(10,30);
    expect(soma).toEqual(40);
  })
});
