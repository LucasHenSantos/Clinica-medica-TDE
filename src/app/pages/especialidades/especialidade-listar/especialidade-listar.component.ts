import { Component, OnInit } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade.service';

@Component({
  selector: 'app-especialidade-listar',
  templateUrl: './especialidade-listar.component.html',
  styleUrls: ['./especialidade-listar.component.css']
})
export class EspecialidadeListarComponent implements OnInit {

  especialidades: Especialidade[] = [];
  todasEspecialidades: Especialidade[] = []; // Armazena a lista completa para filtros
  searchId: string = ''; // Para o campo de busca

  constructor(private especialidadeService: EspecialidadeService) { }

  ngOnInit(): void {
    this.carregarEspecialidades();
  }

  carregarEspecialidades(): void {
    this.especialidadeService.getAll().subscribe({
      next: (data: Especialidade[]) => { // Tipagem explícita para 'data'
        this.todasEspecialidades = data;
        this.especialidades = data; // Inicialmente, exibe todas as especialidades
        console.log('Especialidades carregadas para a lista:', this.especialidades);
      },
      error: (error: any) => { // Tipagem explícita para 'error'
        console.error('Erro ao carregar especialidades:', error);
        alert('Erro ao carregar especialidades.');
      }
    });
  }

  deleteEspecialidade(id: string): void { // Recebe o ID da especialidade
    if (confirm('Tem certeza que deseja excluir esta especialidade?')) {
      this.especialidadeService.delete(id).subscribe({
        next: (response: any) => {
          console.log(response);
          alert('Especialidade excluída com sucesso!');
          this.carregarEspecialidades(); // Recarrega a lista após a exclusão
        },
        error: (error: any) => {
          console.error('Erro ao excluir especialidade:', error);
          alert('Erro ao excluir especialidade.');
        }
      });
    }
  }

  // Método para buscar especialidade (agora filtra na lista já carregada)
  buscarEspecialidade(): void {
    if (this.searchId) {
      // Filtra na lista completa de especialidades carregadas
      this.especialidades = this.todasEspecialidades.filter(
        esp => esp.id.includes(this.searchId) || esp.nome.toLowerCase().includes(this.searchId.toLowerCase())
      );
      if (this.especialidades.length === 0) {
        alert('Nenhuma especialidade encontrada com o ID ou nome informado.');
      }
    } else {
      // Se o campo de busca estiver vazio, exibe todas novamente
      this.especialidades = this.todasEspecialidades;
    }
  }

  limparBusca(): void {
    this.searchId = '';
    this.especialidades = this.todasEspecialidades; // Exibe todas as especialidades novamente
  }
}