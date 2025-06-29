import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';
import { Especialidade } from 'src/app/models/especialidade.model';
import { MedicoService } from 'src/app/services/medico.service';
import { EspecialidadeService } from 'src/app/services/especialidade.service';

@Component({
  selector: 'app-medico-adicionar',
  templateUrl: './medico-adicionar.component.html',
  styleUrls: ['./medico-adicionar.component.css']
})
export class MedicoAdicionarComponent implements OnInit {

  // Inicialize especialidade sem o binId, pois não é mais usado no modelo
  medico: Medico = { id: '', nome: '', crm: '', especialidade: { nome: '', id: '' } };
  especialidades: Especialidade[] = []; // Para armazenar as especialidades a serem selecionadas

  constructor(
    private medicoService: MedicoService,
    private especialidadeService: EspecialidadeService
  ) { }

  ngOnInit(): void {
    this.carregarEspecialidades();
  }

  carregarEspecialidades(): void {
    // Agora o EspecialidadeService.getAll() busca o array completo do bin único
    this.especialidadeService.getAll().subscribe({
      next: (data) => {
        this.especialidades = data; // 'data' já é o array de especialidades
        console.log('Especialidades carregadas para o formulário de médico:', this.especialidades);
      },
      error: (error) => {
        console.error('Erro ao carregar especialidades para o médico:', error);
        alert('Erro ao carregar especialidades. Verifique o console para mais detalhes.');
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (this.medico.nome && this.medico.crm && this.medico.especialidade.id) {
      // Encontre o objeto completo da especialidade selecionada com base no ID
      const especialidadeSelecionada = this.especialidades.find(esp => esp.id === this.medico.especialidade.id);

      if (especialidadeSelecionada) {
        // Atribua o objeto completo da especialidade ao médico
        this.medico.especialidade = especialidadeSelecionada;
      } else {
        alert('Especialidade selecionada inválida. Por favor, selecione uma especialidade existente.');
        return;
      }

      this.medico.id = crypto.randomUUID(); // Gera um ID único para o novo médico

      this.medicoService.save(this.medico).subscribe({
        next: (response) => {
          console.log(response);
          alert('Médico cadastrado com sucesso! Id: ' + response.body.metadata.id);
          form.resetForm();
          this.limparCampos(); // Limpa o objeto médico para um novo cadastro
        },
        error: (error) => {
          console.error('Erro ao cadastrar médico:', error);
          alert('Erro ao cadastrar médico.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios: Nome, CRM e Especialidade.');
    }
  }

  limparCampos(): void {
    this.medico = { id: '', nome: '', crm: '', especialidade: { nome: '', id: '' } };
  }
}