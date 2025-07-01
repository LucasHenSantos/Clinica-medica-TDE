import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ESSENCIAL para ngModel e ngForm
import { HttpClientModule } from '@angular/common/http'; // ESSENCIAL para requisições HTTP

import { AppRoutingModule } from './app-routing.module'; // Módulo de roteamento principal
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
// IMPORTAÇÃO CORRETA DOS COMPONENTES DE FUNCIONÁRIOS
import { FuncionarioAdicionarComponent } from './pages/funcionarios/funcionario-adicionar/funcionario-adicionar.component';
import { FuncionarioListarComponent } from './pages/funcionarios/funcionario-listar/funcionario-listar.component';
// IMPORTAÇÃO CORRETA DOS COMPONENTES DE PACIENTE (caminho 'pages/paciente')
import { PacienteAdicionarComponent } from './pages/paciente/paciente-adicionar/paciente-adicionar.component';
import { PacienteListarComponent } from './pages/paciente/paciente-listar/paciente-listar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component'; // IMPORTAÇÃO DO PerfilComponent

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoasVindaComponent,
    CabecalhoComponent,
    RodapeComponent,
    EspecialidadeAdicionarComponent,
    EspecialidadeListarComponent,
    FuncionarioAdicionarComponent, // Declarado
    FuncionarioListarComponent, // Declarado
    PacienteAdicionarComponent, // Declarado
    PacienteListarComponent, // Declarado
    ConvenioAdicionarComponent,
    ConvenioListarComponent,
    MenuPrincipalComponent,
    PerfilComponent,
    ProntuarioComponent // Declarado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ESSENCIAL
    HttpClientModule // ESSENCIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }