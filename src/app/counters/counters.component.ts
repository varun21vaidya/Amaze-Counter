import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Counter } from '../shared/counter.model';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent implements OnInit {
  counters!: Counter[];
  inputs!: string;
  countValue!: number;
  index!: number;
  new: boolean = true;
  @Input() formData!: FormData;
  form!: FormGroup;
  constructor(private dataservice: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.counters = this.dataservice.getCounter();

    this.form = this.fb.group({
      text: ['', Validators.required],
      count: [0],
    });
    if (this.formData) {
      this.form.setValue(this.formData);
    }
  }

  // deleteEventCall was defined in counter-item component which was output event emitter which is called by onDeleteClick when an item is clicked
  // so this deleteEventCall will initiate deleteTask function in counter html
  // which will called in counter component which will delete following task
  deleteTask(counter: Counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.deleteCounter(index);
  }
  incrementCount(counter: Counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.increaseCount(index);
  }
  decrementCount(counter: Counter) {
    const index = this.counters.indexOf(counter);
    this.dataservice.decreaseCount(index);
  }

  // to add new task
  onFormSubmit(form: FormGroup) {
    console.log(this.form);
    if (this.form.invalid) {
      console.log(this.form.controls['text'].errors?.['required']);
      return this.form.controls['text'].errors?.['required'];
    }
    this.inputs = this.form.value.text;
    this.countValue = 0;
    this.dataservice.addCounter(new Counter(this.inputs, this.countValue));
    form.reset();
    console.log(this.form);
  }
}
