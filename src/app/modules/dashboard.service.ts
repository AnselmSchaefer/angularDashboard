import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Cholinchlorid',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Dimethylamine',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'aMDEA',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'DMEOA',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'OASE',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Methanol',
      y: 65.55,
      sliced: true,
      selected: true
    }, {
      name: 'Ammonia',
      y: 7.18
    }, {
      name: 'Methanol A',
      y: 3.83
    }, {
      name: 'Sodium',
      y: 0.96
    }, {
      name: 'Ammonia liq.',
      y: 11.48
    }];
  }
}
