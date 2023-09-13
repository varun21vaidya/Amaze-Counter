import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { countersComponent } from './counters/counters.component';
import { CountersComponent } from './counters/counters.component';
import { CounterItemComponent } from './counter-item/counter-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CountersComponent, CounterItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
