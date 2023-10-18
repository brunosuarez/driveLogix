import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Diario } from '../diario/diario';
import { Reserva } from '../reserva/reserva';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss'],
})
export class RelatorioComponent {
  campaignOne: any = {};
  campaignTwo: any = {};
  idVeiculo: number | undefined;
  relatorio: any = null;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR');
  }

  gerarRelatorio() {
    const dataInicial = this.campaignOne.start;
    const dataFinal = this.campaignOne.end;
    const idVeiculo = this.idVeiculo;

    const reservas: Reserva[] = JSON.parse(localStorage.getItem('reservas') || '[]');
    const diarios: Diario[] = JSON.parse(localStorage.getItem('diarios') || '[]');

    const reservasFiltradas = reservas.filter((reserva) => {
      const dataReserva = new Date(reserva.dtHoraReserva);
      return (
        dataReserva >= dataInicial &&
        dataReserva <= dataFinal &&
        reserva.idVeiculo === idVeiculo
      );
    });

    const diariosFiltrados = diarios.filter((diario) => {
      const dataDiarioInicio = new Date(diario.dtHoraInicio);
      const dataDiarioTermino = new Date(diario.dtHoraTermino);
      return (
        dataDiarioInicio >= dataInicial &&
        dataDiarioTermino <= dataFinal &&
        diario.idVeiculo === idVeiculo
      );
    });
    const relatorio = {
      reservas: reservasFiltradas,
      diarios: diariosFiltrados,
    };
    this.relatorio = relatorio; 
  }

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
