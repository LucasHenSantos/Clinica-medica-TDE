import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { CabecalhoComponent } from './pages/cabecalho/cabecalho.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
import { MedicoListarComponent } from './pages/medicos/medico-listar/medico-listar.component';
import { MedicoAdicionarComponent } from './pages/medicos/medico-adicionar/medico-adicionar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    CabecalhoComponent,
    BoasVindaComponent,
    EspecialidadeAdicionarComponent,
    EspecialidadeListarComponent,
    MedicoListarComponent,
    MedicoAdicionarComponent,
    ConvenioAdicionarComponent,
    ConvenioListarComponent,
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
