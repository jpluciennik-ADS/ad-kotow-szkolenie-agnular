import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      picUrls: ['puszek1.jpg', 'mruczek1.jpg', 'kiciek.jpg'],
      vaccinated: true,
      funfact: 'Jego ulubionym instrumentem jest puzon',
      adopted: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      picUrls: ['mruczek1.jpg', 'pimpus.jpg', 'kiciek.jpg'],
      vaccinated: true,
      funfact: 'Sypia na plecach',
      adopted: false
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      picUrls: ['kiciek.jpg', 'puszek1.jpg', 'pimpus.jpg'],
      vaccinated: true,
      funfact: "Tak naprawde ma na imie Stefan",
      adopted: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      picUrls: ['klaczek.jpg', 'kiciek.jpg', 'mruczek1.jpg'],
      vaccinated: true,
      funfact: "Potrafi szydelkowac",
      adopted: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      picUrls: ['pimpus.jpg', 'mruczek1.jpg', 'puszek1.jpg'],
      vaccinated: false,
      funfact: "Jest wspoltworca frameworku Angular",
      adopted: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
