import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './components/layouts/sidenav/sidenav.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { VeiculoComponent } from './components/cadastro/veiculo/veiculo.component';
import { MotoristaComponent } from './components/cadastro/motorista/motorista.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { DiarioComponent } from './components/diario/diario.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { HomeComponent } from './components/home/home.component';
import { CreateReservaComponent } from './components/reserva/create-reserva/create-reserva.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    VeiculosComponent,
    ReservaComponent,
    VeiculosComponent,
    MotoristasComponent,
    DiarioComponent,
    RelatorioComponent,
    HomeComponent,
    MotoristaComponent,
    VeiculoComponent,
    CreateReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
