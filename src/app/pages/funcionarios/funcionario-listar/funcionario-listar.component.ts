import { Component, OnDestroy, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.css']
})
export class FuncionarioListarComponent implements OnInit, OnDestroy {
  funcionarios: Funcionario[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  carregarFuncionarios(): void {
    this.funcionarioService.getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data: Funcionario[]) => {
          this.funcionarios = data;
          console.log('Funcionários carregados:', this.funcionarios);
        },
        error: (err: any) => {
          console.error('Erro ao carregar funcionários:', err);
          alert('Erro ao carregar funcionários. Verifique o console para mais detalhes.');
        }
      });
  }

  excluirFuncionario(id: string): void {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      this.funcionarioService.delete(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe({
          next: () => {
            alert('Funcionário excluído com sucesso!');
            // Otimização: remove o funcionário da lista local em vez de recarregar tudo
            this.funcionarios = this.funcionarios.filter(f => f.id !== id);
          },
          error: (err: any) => {
            console.error('Erro ao excluir funcionário:', err);
            alert('Erro ao excluir funcionário. Verifique o console para mais detalhes.');
          }
        });
    }
  }
}
