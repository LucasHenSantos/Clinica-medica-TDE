import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/models/funcionario.model';
import { Especialidade } from 'src/app/models/especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';


@Component({
  selector: 'app-funcionario-adicionar',
  templateUrl: './funcionario-adicionar.component.html',
  styleUrls: ['./funcionario-adicionar.component.css']
})
export class FuncionarioAdicionarComponent implements OnInit {

  // Inicializa 'funcionario' com crm e especialidade como undefined, pois são opcionais no modelo
  // e o tipo padrão é 'Atendente'.
  funcionario: Funcionario = { id: '', nome: '', tipo: 'Atendente', crm: undefined, especialidade: undefined };
  especialidades: Especialidade[] = [];

  isMedico: boolean = false; // Controla a exibição dos campos de médico no HTML

  constructor(
    private funcionarioService: FuncionarioService,
    private especialidadeService: EspecialidadeService
  ) { }

  ngOnInit(): void {
    // Chamamos onTipoChange no início para configurar o estado inicial (Atendente) corretamente.
    this.onTipoChange();
  }

  onTipoChange(): void {
    this.isMedico = (this.funcionario.tipo === 'Medico');
    if (this.isMedico) {
      this.carregarEspecialidades();
      // Se mudar para 'Medico' e 'especialidade' for undefined, inicializa como objeto vazio.
      // Isso é crucial para que o two-way data binding [(ngModel)] no HTML funcione sem erros.
      if (this.funcionario.especialidade === undefined) {
        this.funcionario.especialidade = { id: '', nome: '' };
      }
    } else {
      // Se mudar para 'Atendente', limpa os campos de médico no frontend.
      // Define crm e especialidade como undefined para o objeto no frontend.
      this.funcionario.crm = undefined;
      this.funcionario.especialidade = undefined;
    }
  }

  carregarEspecialidades(): void {
    this.especialidadeService.getAll().subscribe({
      next: (data: Especialidade[]) => {
        this.especialidades = data;
        console.log('Especialidades carregadas para o formulário de funcionário:', this.especialidades);
      },
      error: (error: any) => {
        console.error('Erro ao carregar especialidades:', error);
        alert('Erro ao carregar especialidades.');
      }
    });
  }

  onSubmit(form: NgForm): void {
    // Gera um ID único para o novo funcionário.
    this.funcionario.id = crypto.randomUUID();

    // Cria uma CÓPIA do objeto 'funcionario' antes de manipulá-lo para salvar.
    // Isso é uma boa prática para não afetar o estado do formulário no frontend.
    const funcionarioParaSalvar: Funcionario = { ...this.funcionario };

    if (funcionarioParaSalvar.tipo === 'Medico') {
      // Valida se CRM e Especialidade foram preenchidos para médicos.
      if (!funcionarioParaSalvar.crm || !funcionarioParaSalvar.especialidade || !funcionarioParaSalvar.especialidade.id) {
        alert('Por favor, preencha o CRM e selecione a Especialidade para o Médico.');
        return;
      }
      
      // Asserção de tipo explícita: Diz ao TypeScript que especialidade NÃO é undefined aqui.
      const especialidadeDoMedico: Especialidade = funcionarioParaSalvar.especialidade;

      // Encontra o objeto completo da especialidade selecionada (do array de especialidades)
      // e atribui à especialidade do funcionário.
      const especialidadeSelecionada = this.especialidades.find(esp => esp.id === especialidadeDoMedico.id); // Usando a variável asserida
      if (especialidadeSelecionada) {
        funcionarioParaSalvar.especialidade = especialidadeSelecionada;
      } else {
        alert('Especialidade selecionada inválida para o médico.');
        return;
      }
    } else {
      // Se o tipo for 'Atendente', garante que CRM e especialidade não sejam enviados no payload.
      // Define explicitamente como undefined para o objeto que será salvo no backend.
      funcionarioParaSalvar.crm = undefined;
      funcionarioParaSalvar.especialidade = undefined;
    }

    // Valida se o nome foi preenchido (obrigatório para ambos os tipos).
    if (!funcionarioParaSalvar.nome) {
        alert('Por favor, preencha o nome do funcionário.');
        return;
    }

    // Chama o serviço para salvar o funcionário.
    this.funcionarioService.save(funcionarioParaSalvar).subscribe({
      next: (response) => {
        console.log(response);
        // A resposta do PUT não retorna o ID do objeto individual, mas o do Bin. Usamos o ID que geramos no frontend.
        alert('Funcionário salvo com sucesso! Id: ' + funcionarioParaSalvar.id);
        form.resetForm(); // Reseta o formulário
        this.limparCampos(); // Limpa o objeto 'funcionario' no frontend para um novo cadastro
      },
      error: (error: any) => {
        console.error('Erro ao cadastrar funcionário:', error);
        alert('Erro ao cadastrar funcionário.');
      }
    });
  }

  limparCampos(): void {
    // Reseta o objeto 'funcionario' para o estado inicial padrão (Atendente, campos opcionais undefined).
    this.funcionario = { id: '', nome: '', tipo: 'Atendente', crm: undefined, especialidade: undefined };
    this.isMedico = false; // Reseta a flag para esconder os campos de médico.
  }
}