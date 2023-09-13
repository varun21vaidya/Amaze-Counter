import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { counter } from '../shared/counter.model';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class countersComponent implements OnInit {
  counters!: counter[];
  inputs!: string;
  countValue!: number;
  index!: number;
  new: boolean = true;
  @Input() formData!: FormData;
  form!: FormGroup;
  constructor(private dataservice: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.counters = this.dataservice.getcounter();

    this.form = this.fb.group({
      text: ['', Validators.required],
      count: [0, Validators.required],
    });
    if (this.formData) {
      this.form.setValue(this.formData);
    }
  }

  // deleteEventCall was defined in counter-item component which was output event emitter which is called by onDeleteClick when an item is clicked
  // so this deleteEventCall will initiate deleteTask function in counter html
  // which will called in counter component which will delete following task
  deleteTask(counter: counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.deletecounter(index);
  }
  incrementCount(counter: counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.increaseCount(index);
  }
  decrementCount(counter: counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.decreaseCount(index);
  }

  // to add new task
  onFormSubmit(form: FormGroup) {
    if (form.invalid) {
      console.log(form.controls['text'].errors?.['required']);
      return;
    }
    this.inputs = form.value.text;
    this.countValue = 0;
    this.dataservice.addcounter(new counter(this.inputs, this.countValue));
    form.reset();
    console.log(form);
  }
}
