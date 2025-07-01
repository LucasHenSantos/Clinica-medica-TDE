import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Módulo para ngModel e ngForm
import { HttpClientModule } from '@angular/common/http'; // Módulo para requisições HTTP

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
import { FuncionarioAdicionarComponent } from './pages/funcionarios/funcionario-adicionar/funcionario-adicionar.component';
// CORRIGIDO: Importa o FuncionarioListarComponent
import { FuncionarioListarComponent } from './pages/funcionarios/funcionario-listar/funcionario-listar.component';
import { PacienteAdicionarComponent } from './pages/paciente/paciente-adicionar/paciente-adicionar.component';
import { PacienteListarComponent } from './pages/paciente/paciente-listar/paciente-listar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoasVindaComponent,
    CabecalhoComponent,
    RodapeComponent,
    EspecialidadeAdicionarComponent,
    EspecialidadeListarComponent,
    FuncionarioAdicionarComponent,
    FuncionarioListarComponent, // DECLARADO AQUI: FuncionarioListarComponent
    PacienteAdicionarComponent,
    PacienteListarComponent,
    ConvenioAdicionarComponent,
    ConvenioListarComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }