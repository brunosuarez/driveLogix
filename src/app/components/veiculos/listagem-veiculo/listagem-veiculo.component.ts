import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface VeiculoElement {
  placaVeiculo: string;
  marcaVeiculo: string;
  modeloVeiculo: string;
  anoVeiculo: number;
  quilometragemVeiculo: number;
  statusVeiculo: string;
}

@Component({
  selector: 'app-listagem-veiculo',
  templateUrl: './listagem-veiculo.component.html',
  styleUrls: ['./listagem-veiculo.component.scss']
})

export class ListagemVeiculoComponent implements OnInit {
  displayedColumns: string[] = ['placaVeiculo', 'marcaVeiculo', 'modeloVeiculo', 'anoVeiculo', 'quilometragemVeiculo', 'statusVeiculo', 'edit'];
  dataSource = new MatTableDataSource<VeiculoElement>();

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.loadVeiculosFromLocalStorage();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadVeiculosFromLocalStorage() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos') || '[]');
    this.dataSource.data = veiculos;
  }

  editVeiculo(idVeiculo: number) {
    if (idVeiculo !== null && idVeiculo !== undefined) {
      this.router.navigate(['/veiculo/cadastro/edit', idVeiculo]);
    } else {
      console.error('ID de veiculo inválido:', idVeiculo);
    }
  }
}

