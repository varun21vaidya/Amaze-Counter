import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Counter } from '../shared/counter.model';

@Component({
  selector: 'app-counter-item',
  templateUrl: './counter-item.component.html',
  styleUrls: ['./counter-item.component.scss'],
})
export class CounterItemComponent implements OnInit {
  @Input() counter!: Counter;
  // we have to implement the functionality to complete the task
  // emit an event each time item is clicked
  // so that parent component can event bind to listen those events
  // event type is void bcz we arent going to send any data
  // its just a signal that counter was clicked

  @Output() deleteEventCall: EventEmitter<void> = new EventEmitter();
  @Output() incrementEventCall: EventEmitter<void> = new EventEmitter();
  @Output() decrementEventCall: EventEmitter<void> = new EventEmitter();
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {}

  // EventCalled was defined in counter-item component which was output event emitter which is called by onClick when an item is clicked
  // so this EventCall will initiate function in counter html which will called in counter component
  // which will increament or decreament following counter

  onDeleteClick() {
    this.deleteEventCall.emit();
  }
  onIncrementClick() {
    this.incrementEventCall.emit();
  }
  onDecrementClick() {
    this.decrementEventCall.emit();
  }
}
