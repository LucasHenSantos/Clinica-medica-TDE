import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoasVindaComponent } from './pages/boas-vinda/boas-vinda.component';
import { EspecialidadeAdicionarComponent } from './pages/especialidades/especialidade-adicionar/especialidade-adicionar.component';
import { EspecialidadeListarComponent } from './pages/especialidades/especialidade-listar/especialidade-listar.component';
import { FuncionarioAdicionarComponent } from './pages/funcionarios/funcionario-adicionar/funcionario-adicionar.component';
// CORREÇÃO: O caminho para MedicoListarComponent como você já havia movido para 'funcionarios'
import { MedicoListarComponent } from './pages/funcionarios/medico-listar/medico-listar.component';
import { ConvenioAdicionarComponent } from './pages/convenios/convenio-adicionar/convenio-adicionar.component';
import { ConvenioListarComponent } from './pages/convenios/convenio-listar/convenio-listar.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'boas-vinda', component: BoasVindaComponent },
  { path: 'especialidade-adicionar', component: EspecialidadeAdicionarComponent },
  { path: 'especialidade-listar', component: EspecialidadeListarComponent },
  { path: 'funcionario-adicionar', component: FuncionarioAdicionarComponent },
  { path: 'medico-listar', component: MedicoListarComponent }, // A rota permanece a mesma
  { path: 'convenios/adicionar', component: ConvenioAdicionarComponent },
  { path: 'convenios/listar', component: ConvenioListarComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }