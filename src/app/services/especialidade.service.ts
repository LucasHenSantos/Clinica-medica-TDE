import { Injectable } from '@angular/core';
import { Especialidade } from '../models/especialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, X_ACCESS_KEY, ESPECIALIDADES_BIN_ID } from '../utils/constants';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor(private http: HttpClient) {}

  // Método para obter TODAS as especialidades do BIN ÚNICO
  getAll(): Observable<Especialidade[]> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.get<any>(`${API_URL}/${ESPECIALIDADES_BIN_ID}/latest`, { headers, observe: 'response' }).pipe(
      map(response => {
        if (response && response.body && response.body.record) {
          // **ADICIONADA A VERIFICAÇÃO DE TIPO:**
          // Se 'record' não for um array, ou se for null/undefined, retorna um array vazio.
          if (Array.isArray(response.body.record)) {
            return response.body.record as Especialidade[];
          } else {
            console.warn('Conteúdo do bin JSONBin.io não é um array. Retornando array vazio. Conteúdo:', response.body.record);
            return [];
          }
        }
        return []; // Retorna array vazio se não houver body ou record
      }),
      catchError(error => {
        console.error('Erro ao buscar todas as especialidades (GET ALL):', error);
        // Em caso de erro HTTP (ex: 404 se o bin ainda não existe ou 500), retorna um array vazio.
        return of([]);
      })
    );
  }

  // O método save permanece o mesmo, pois agora 'getAll()' garantirá que especialidadesAtuais seja um array
  save(novaEspecialidade: Especialidade): Observable<any>{
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY,
        'X-Bin-Versioning': 'false'
      }
    );

    return this.getAll().pipe(
      switchMap(especialidadesAtuais => {
        novaEspecialidade.id = novaEspecialidade.id || crypto.randomUUID();

        const index = especialidadesAtuais.findIndex(e => e.id === novaEspecialidade.id);
        if (index > -1) {
          especialidadesAtuais[index] = novaEspecialidade;
        } else {
          especialidadesAtuais.push(novaEspecialidade);
        }

        return this.http.put(`${API_URL}/${ESPECIALIDADES_BIN_ID}`, especialidadesAtuais, { headers, observe: 'response' });
      }),
      catchError(error => {
        console.error('Erro ao salvar especialidade (SAVE):', error);
        throw error;
      })
    );
  }

  // O método delete permanece o mesmo
  delete(id: string) : Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY,
        'X-Bin-Versioning': 'false'
      }
    );

    return this.getAll().pipe(
      switchMap(especialidadesAtuais => {
        const especialidadesFiltradas = especialidadesAtuais.filter(esp => esp.id !== id);
        return this.http.put(`${API_URL}/${ESPECIALIDADES_BIN_ID}`, especialidadesFiltradas, { headers, observe: 'response' });
      }),
      catchError(error => {
        console.error('Erro ao deletar especialidade (DELETE):', error);
        throw error;
      })
    );
  }
}