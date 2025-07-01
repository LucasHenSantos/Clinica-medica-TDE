import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario.model';
import { API_URL, X_ACCESS_KEY, FUNCIONARIOS_BIN_ID } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Funcionario[]> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.get<any>(`${API_URL}/${FUNCIONARIOS_BIN_ID}/latest`, { headers, observe: 'response' }).pipe(
      map(response => {
        if (response && response.body && response.body.record) {
          if (Array.isArray(response.body.record)) {
            return response.body.record as Funcionario[];
          } else {
            console.warn('Conteúdo do bin JSONBin.io não é um array para funcionários. Retornando array vazio. Conteúdo:', response.body.record);
            return [];
          }
        }
        return [];
      }),
      catchError(error => {
        console.error('Erro ao buscar todos os funcionários (GET ALL):', error);
        return of([]);
      })
    );
  }

  save(novoFuncionario: Funcionario): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY,
        'X-Bin-Versioning': 'false'
      }
    );

    return this.getAll().pipe(
      switchMap(funcionariosAtuais => {
        novoFuncionario.id = novoFuncionario.id || crypto.randomUUID();

        const index = funcionariosAtuais.findIndex(f => f.id === novoFuncionario.id);
        if (index > -1) {
          funcionariosAtuais[index] = novoFuncionario;
        } else {
          funcionariosAtuais.push(novoFuncionario);
        }

        // <<--- É CRUCIAL TER ESTE 'return' AQUI
        return this.http.put(`${API_URL}/${FUNCIONARIOS_BIN_ID}`, funcionariosAtuais, { headers, observe: 'response' });
      }),
      catchError(error => {
        console.error('Erro ao salvar funcionário (SAVE):', error);
        throw error;
      })
    );
  }

  delete(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY,
        'X-Bin-Versioning': 'false'
      }
    );

    return this.getAll().pipe(
      switchMap(funcionariosAtuais => {
        const funcionariosFiltrados = funcionariosAtuais.filter(f => f.id !== id);
        // <<--- É CRUCIAL TER ESTE 'return' AQUI
        return this.http.put(`${API_URL}/${FUNCIONARIOS_BIN_ID}`, funcionariosFiltrados, { headers, observe: 'response' });
      }),
      catchError(error => {
        console.error('Erro ao deletar funcionário (DELETE):', error);
        throw error;
      })
    );
  }

  // O método getById individual não faz mais sentido com a estratégia de "lista em um único bin"
}