import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoristaComponent } from './components/cadastro/motorista/motorista.component';
import { VeiculoComponent } from './components/cadastro/veiculo/veiculo.component';
import { DiarioComponent } from './components/diario/diario.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HomeComponent } from './components/home/home.component';
import { CreateReservaComponent } from './components/reserva/create-reserva/create-reserva.component';
import { LoginComponent } from './components/login/login.component';
import { CreateContaComponent } from './components/create-conta/create-conta.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-conta', component: CreateContaComponent },
  { path: 'cadastro', children: [
    { path: 'motorista', component: MotoristaComponent },
    { path: 'veiculo', component: VeiculoComponent }
  ] },
  { path: 'diario', component: DiarioComponent },
  { path: 'motoristas', component: MotoristasComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'reserva/create-reserve', component: CreateReservaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
