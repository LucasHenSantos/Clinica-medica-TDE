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

  especialidade:Especialidade = {nome: '', id :'', binId: ''};
  
  onSubmit(form: NgForm): void {
    if (this.especialidade.nome) {
      this.especialidade.id = crypto.randomUUID();
      this.especialidadeService.save(this.especialidade).subscribe({
        next: (response) => {
          console.log(response);
          alert('Especialidade cadastrada com sucesso! Id:'+ response.body.metadata.id );
          form.resetForm();
        },
        error: () => alert('Erro ao cadastrar especialidade.')
      });
    }else{
      alert('Por favor, preencha o nome da especialidade.');
    }
  }

  constructor(private especialidadeService: EspecialidadeService) {}

  limparCampos() {
    this.especialidade = { nome: '', id: '', binId: '' };
  }
}