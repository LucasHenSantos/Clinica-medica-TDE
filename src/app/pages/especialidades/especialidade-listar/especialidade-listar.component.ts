import { Component } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade.service';

@Component({
  selector: 'app-especialidade-listar',
  templateUrl: './especialidade-listar.component.html',
  styleUrls: ['./especialidade-listar.component.css']
})
export class EspecialidadeListarComponent {
  
especialidade: Especialidade | undefined;
searchId: string = '';

constructor(private especialidadeService: EspecialidadeService) {}

onEdit(_t25: any) {
throw new Error('Method not implemented.');
}

onDelete() {
  if (this.especialidade) {
    this.especialidadeService.delete(this.especialidade.binId).subscribe({
      next: () => {
        alert('Especialidade excluída com sucesso.');
        this.especialidade = undefined;
      },
      error: (error) => {
        alert('Erro ao excluir especialidade:');
      }
    });
  }
}

onSearch() {
  if (this.searchId) {
    // Aqui você pode chamar o serviço para buscar a especialidade pelo ID
    console.log(`Buscando especialidade com ID: ${this.searchId}`);
    this.especialidadeService.getById(this.searchId).subscribe({
      next: (response) => {
        if(!response.body || !response.body.record) {
          console.error('Especialidade não encontrada.');
          alert('Especialidade não encontrada.');
          return;
        }

        this.especialidade = {
          binId: response.body.metadata.id,
          id: response.body.record.id,
          nome: response.body.record.nome,
        };
        console.log('Especialidade encontrada:', this.especialidade);
      },
      error: (error) => {
        console.error('Erro ao buscar especialidade:', error);
        alert('Especialidade não encontrada.');
      }
    });
  } else {
        alert('Informe o ID da especialidade para buscar.');
  }
}

}
