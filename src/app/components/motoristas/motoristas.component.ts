import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface MotoristaElement {
  nomeMotorista: string;
  numCNH: string;
  categoriaCNH: string;
  setor: string;
  gerente: string;
}

const ELEMENT_DATA: MotoristaElement[] = [
  {
    nomeMotorista: 'João Silva',
    numCNH: '123456789',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Maria Souza',
    numCNH: '987654321',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Pedro Santos',
    numCNH: '567890123',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Ana Rodrigues',
    numCNH: '543216789',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Carlos Oliveira',
    numCNH: '987654321',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Sandra Lima',
    numCNH: '789012345',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Ricardo Alves',
    numCNH: '678901234',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Laura Fernandes',
    numCNH: '456789012',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Miguel Santos',
    numCNH: '890123456',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Isabel Pereira',
    numCNH: '543210987',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Fernando Oliveira',
    numCNH: '234567890',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Elena Martins',
    numCNH: '678901234',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Guilherme Costa',
    numCNH: '123456789',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  },
  {
    nomeMotorista: 'Júlia Rodrigues',
    numCNH: '789012345',
    categoriaCNH: 'C',
    setor: 'Recursos Humanos',
    gerente: 'Carlos Oliveira'
  },
  {
    nomeMotorista: 'Rafael Santos',
    numCNH: '987612345',
    categoriaCNH: 'B',
    setor: 'Logística',
    gerente: 'Maria Souza'
  }
];

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.scss']
})
export class MotoristasComponent {
  displayedColumns: string[] = ['nomeMotorista', 'numCNH', 'categoriaCNH', 'setor', 'gerente'];
  dataSource = new MatTableDataSource<MotoristaElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

