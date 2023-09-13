import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { countersComponent } from './counters/counters.component';
import { countersComponent } from './counters/counters.component';
import { counterItemComponent } from './counter-item/counter-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, countersComponent, counterItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
