import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade.service';

@Component({
  selector: 'app-especialidade-adicionar',
  templateUrl: './especialidade-adicionar.component.html',
  styleUrls: ['./especialidade-adicionar.component.css']
})
export class EspecialidadeAdicionarComponent {

  // Inicialize especialidade sem o binId, pois não é mais usado no modelo
  especialidade: Especialidade = { nome: '', id :'' }; // Remova 'binId' daqui
  
  constructor(private especialidadeService: EspecialidadeService) {}

  onSubmit(form: NgForm): void {
    if (this.especialidade.nome) {
      // O ID será gerado dentro do service, se necessário
      // O service agora cuida de buscar a lista, adicionar/atualizar e salvar de volta
      this.especialidadeService.save(this.especialidade).subscribe({
        next: (response) => {
          console.log(response);
          // A resposta do PUT do JSONBin.io terá metadados do bin, não do item individual
          alert('Especialidade cadastrada/atualizada com sucesso!'); // Mensagem mais genérica
          form.resetForm();
          this.limparCampos(); // Limpa o objeto especialidade para um novo cadastro
        },
        error: (error) => {
          console.error('Erro ao cadastrar especialidade:', error);
          alert('Erro ao cadastrar especialidade.');
        }
      });
    }else{
      alert('Por favor, preencha o nome da especialidade.');
    }
  }

  limparCampos() {
    this.especialidade = { nome: '', id: '' }; // Remova 'binId' daqui também
  }
}