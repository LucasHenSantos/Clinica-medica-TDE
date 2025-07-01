import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
// NOVO: Importa o FuncionarioAdicionarComponent
import { FuncionarioAdicionarComponent } from './pages/funcionarios/funcionario-adicionar/funcionario-adicionar.component';
// NOVO: Importa o FuncionarioListarComponent
import { FuncionarioListarComponent } from './pages/funcionarios/funcionario-listar/funcionario-listar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { PerfilComponent } from './pages/perfil/perfil.component'; // IMPORTAÇÃO DO PerfilComponent


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'boas-vinda', component: BoasVindaComponent },
  { path: 'especialidade-adicionar', component: EspecialidadeAdicionarComponent },
  { path: 'especialidade-listar', component: EspecialidadeListarComponent },
  { path: 'funcionario-adicionar', component: FuncionarioAdicionarComponent },
  { path: 'funcionario-listar', component: FuncionarioListarComponent }, // Rota para o componente de listagem de funcionários
  { path: 'convenios/adicionar', component: ConvenioAdicionarComponent },
  { path: 'convenios/listar', component: ConvenioListarComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'perfil', component: PerfilComponent } // Rota para o PerfilComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }