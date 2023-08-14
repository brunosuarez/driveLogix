import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface VeiculoElement {
  placaVeiculo: string;
  marcaVeiculo: string;
  modeloVeiculo: string;
  anoVeiculo: number;
  quilometragemVeiculo: number;
  statusVeiculo: string;
}

const ELEMENT_DATA: VeiculoElement[] = [
  {
    placaVeiculo: 'ABC-1234',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'DEF-5678',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'GHI-9012',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'JKL-3456',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'MNO-6789',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'PQRS-0123',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'TUVW-4567',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'XYZ-8901',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'AAA-1111',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'BBB-2222',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'CCC-3333',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'DDD-4444',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'EEE-5555',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'FFF-6666',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  },
  {
    placaVeiculo: 'GGG-7777',
    marcaVeiculo: 'Marca A',
    modeloVeiculo: 'Modelo A',
    anoVeiculo: 2023,
    quilometragemVeiculo: 15000,
    statusVeiculo: 'Ativo'
  }
];

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})

export class VeiculosComponent {
  displayedColumns: string[] = ['placaVeiculo', 'marcaVeiculo', 'modeloVeiculo', 'anoVeiculo', 'quilometragemVeiculo', 'statusVeiculo'];
  dataSource = new MatTableDataSource<VeiculoElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

