import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent {

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR');
  }

  campaignOne = {
    start: new Date(),
    end: new Date()
  };

  campaignTwo = {
    start: new Date(),
    end: new Date()
  };

  startDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignOne.start = event.value;
    }
  }
  
  endDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignOne.end = event.value;
    }
  }
  
  startTwoDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignTwo.start = event.value;
    }
  }
  
  endTwoDateSelected(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.campaignTwo.end = event.value;
    }
  }
  
}


