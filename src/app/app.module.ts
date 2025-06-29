import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <<--- IMPORTE FormsModule AQUI
import { HttpClientModule } from '@angular/common/http'; // <<--- IMPORTE HttpClientModule AQUI

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component'; // <<--- IMPORTE CabecalhoComponent
import { RodapeComponent } from './pages/rodape/rodape.component'; // <<--- IMPORTE RodapeComponent
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
import { FuncionarioAdicionarComponent } from './pages/funcionarios/funcionario-adicionar/funcionario-adicionar.component';
import { MedicoListarComponent } from './pages/funcionarios/medico-listar/medico-listar.component';
// Ajuste os imports dos componentes Paciente para o novo caminho 'pages/paciente'
import { PacienteAdicionarComponent } from './pages/paciente/paciente-adicionar/paciente-adicionar.component'; // <<--- AJUSTE O CAMINHO AQUI
import { PacienteListarComponent } from './pages/paciente/paciente-listar/paciente-listar.component'; // <<--- AJUSTE O CAMINHO AQUI
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component'; // <<--- IMPORTE MenuPrincipalComponent


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoasVindaComponent,
    CabecalhoComponent, // <<--- DECLARE AQUI
    RodapeComponent, // <<--- DECLARE AQUI
    EspecialidadeAdicionarComponent,
    EspecialidadeListarComponent,
    FuncionarioAdicionarComponent,
    // Remover MedicoAdicionarComponent daqui, ele foi substituído
    MedicoListarComponent,
    PacienteAdicionarComponent, // <<--- DECLARE AQUI
    PacienteListarComponent, // <<--- DECLARE AQUI
    ConvenioAdicionarComponent,
    ConvenioListarComponent,
    MenuPrincipalComponent // <<--- DECLARE AQUI
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <<--- Adicione aqui
    HttpClientModule // <<--- Adicione aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }