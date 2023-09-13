import { Injectable } from '@angular/core';
import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counters: Counter[] = localStorage.getItem('datakey')
    ? JSON.parse(localStorage.getItem('datakey') || '[]')
    : [];
  // property to contain counters
  constructor() {}

  getCounter() {
    return this.counters;
  }

  addCounter(counter: Counter) {
    this.counters.push(counter);
    localStorage.setItem('datakey', JSON.stringify(this.counters));
  }
  deleteCounter(ind: number) {
    this.counters.splice(ind, 1);
    localStorage.setItem('datakey', JSON.stringify(this.counters));
  }
  increaseCount(ind: number) {
    this.counters[ind].count++;
    localStorage.setItem('datakey', JSON.stringify(this.counters));
  }
  decreaseCount(ind: number) {
    this.counters[ind].count--;
    localStorage.setItem('datakey', JSON.stringify(this.counters));
  }
}
