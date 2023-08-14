import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  data: Date;
  solicitante: string;
  idVeiculo: number;
  rota: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    data: new Date('2023-07-01'),
    solicitante: 'João',
    idVeiculo: 101,
    rota: 'Rota A',
    status: 'Concluído'
  },
  {
    data: new Date('2023-07-02'),
    solicitante: 'Maria',
    idVeiculo: 102,
    rota: 'Rota B',
    status: 'Pendente'
  },
  {
    data: new Date('2023-07-03'),
    solicitante: 'Pedro',
    idVeiculo: 103,
    rota: 'Rota C',
    status: 'Em andamento'
  },
  {
    data: new Date('2023-07-04'),
    solicitante: 'Ana',
    idVeiculo: 104,
    rota: 'Rota D',
    status: 'Concluído'
  },
  {
    data: new Date('2023-07-05'),
    solicitante: 'Carlos',
    idVeiculo: 105,
    rota: 'Rota E',
    status: 'Pendente'
  },
  {
    data: new Date('2023-07-06'),
    solicitante: 'Sandra',
    idVeiculo: 106,
    rota: 'Rota F',
    status: 'Em andamento'
  },
  {
    data: new Date('2023-07-07'),
    solicitante: 'Ricardo',
    idVeiculo: 107,
    rota: 'Rota G',
    status: 'Concluído'
  },
  {
    data: new Date('2023-07-08'),
    solicitante: 'Laura',
    idVeiculo: 108,
    rota: 'Rota H',
    status: 'Pendente'
  },
  {
    data: new Date('2023-07-09'),
    solicitante: 'Miguel',
    idVeiculo: 109,
    rota: 'Rota I',
    status: 'Em andamento'
  },
  {
    data: new Date('2023-07-10'),
    solicitante: 'Isabel',
    idVeiculo: 110,
    rota: 'Rota J',
    status: 'Concluído'
  },
  {
    data: new Date('2023-07-11'),
    solicitante: 'Fernando',
    idVeiculo: 111,
    rota: 'Rota K',
    status: 'Pendente'
  },
  {
    data: new Date('2023-07-12'),
    solicitante: 'Elena',
    idVeiculo: 112,
    rota: 'Rota L',
    status: 'Em andamento'
  },
  {
    data: new Date('2023-07-13'),
    solicitante: 'Guilherme',
    idVeiculo: 113,
    rota: 'Rota M',
    status: 'Concluído'
  },
  {
    data: new Date('2023-07-14'),
    solicitante: 'Júlia',
    idVeiculo: 114,
    rota: 'Rota N',
    status: 'Pendente'
  },
  {
    data: new Date('2023-07-15'),
    solicitante: 'Rafael',
    idVeiculo: 115,
    rota: 'Rota O',
    status: 'Em andamento'
  }
];

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent {
  displayedColumns: string[] = ['data', 'solicitante', 'idVeiculo', 'rota', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

