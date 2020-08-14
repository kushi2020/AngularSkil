/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
}*/
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 21, name: 'Mr. Nice' },
      { id: 22, name: 'Narco' },
      { id: 23, name: 'Bombasto' },
      { id: 24, name: 'Celeritas' },
      { id: 25, name: 'Magneta' },
      { id: 26, name: 'RubberMan' },
      { id: 27, name: 'Dynama' },
      { id: 28, name: 'Dr IQ' },
      { id: 29, name: 'Magma' },
      { id: 30, name: 'Tornado' }
    ];
    return {heroes};
  }
}
