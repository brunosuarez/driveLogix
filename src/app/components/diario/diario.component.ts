import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ViagemElement {
  dtHoraInicio: Date;
  dtHoraTermino: Date;
  localPartida: string;
  localDestino: string;
  qtdeParadas: number;
  quilometragemPercorrida: number;
  observacoes: string;
  idVeiculo: number;
  idMotorista: number;
}

const ELEMENT_DATA: ViagemElement[] = [
  {
    dtHoraInicio: new Date('2023-07-02T09:00:00'),
    dtHoraTermino: new Date('2023-07-02T17:00:00'),
    localPartida: 'Cidade A',
    localDestino: 'Cidade B',
    qtdeParadas: 2,
    quilometragemPercorrida: 150,
    observacoes: 'Estrada em boas condições',
    idVeiculo: 101,
    idMotorista: 201
  },
  {
    dtHoraInicio: new Date('2023-07-03T10:30:00'),
    dtHoraTermino: new Date('2023-07-03T15:30:00'),
    localPartida: 'Cidade B',
    localDestino: 'Cidade D',
    qtdeParadas: 1,
    quilometragemPercorrida: 200,
    observacoes: 'Clima ensolarado',
    idVeiculo: 103,
    idMotorista: 203
  },
  {
    dtHoraInicio: new Date('2023-07-04T08:00:00'),
    dtHoraTermino: new Date('2023-07-04T18:00:00'),
    localPartida: 'Cidade C',
    localDestino: 'Cidade E',
    qtdeParadas: 4,
    quilometragemPercorrida: 450,
    observacoes: 'Tráfego congestionado',
    idVeiculo: 102,
    idMotorista: 204
  },
  {
    dtHoraInicio: new Date('2023-07-05T11:00:00'),
    dtHoraTermino: new Date('2023-07-05T14:30:00'),
    localPartida: 'Cidade D',
    localDestino: 'Cidade F',
    qtdeParadas: 0,
    quilometragemPercorrida: 120,
    observacoes: 'Viagem tranquila',
    idVeiculo: 104,
    idMotorista: 205
  },
  {
    dtHoraInicio: new Date('2023-07-06T09:45:00'),
    dtHoraTermino: new Date('2023-07-06T16:15:00'),
    localPartida: 'Cidade E',
    localDestino: 'Cidade G',
    qtdeParadas: 2,
    quilometragemPercorrida: 280,
    observacoes: 'Paisagens incríveis',
    idVeiculo: 101,
    idMotorista: 206
  },
];


@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.scss']
})
export class DiarioComponent {
  displayedColumns: string[] = [
    'qtdeParadas', 'quilometragemPercorrida', 'observacoes', 'idVeiculo', 'idMotorista'
  ];

  dataSource = new MatTableDataSource<ViagemElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
