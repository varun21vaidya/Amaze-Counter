import { Injectable } from '@angular/core';
import { counter } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  counters: counter[] = localStorage.getItem('datakey')
    ? JSON.parse(localStorage.getItem('datakey') || '[]')
    : [];
  // property to contain counters
  constructor() {}

  getcounter() {
    return this.counters;
  }

  addcounter(counter: counter) {
    this.counters.push(counter);
    localStorage.setItem('datakey', JSON.stringify(this.counters));
  }
  deletecounter(ind: number) {
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
