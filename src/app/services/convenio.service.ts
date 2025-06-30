import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio.model'; // Importa o modelo FuncionarioAdd commentMore actions
import { API_URL, X_ACCESS_KEY } from '../utils/constants';

export interface Convenio {
  id?: number;
  nome: string;
  cnpj: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  constructor(private http: HttpClient) { }

    save(convenio: Convenio): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'funcionarios', // Nome do seu "bin" para funcionários no JSONBin.io
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    // Realiza a requisição POST para a API, criando um novo bin para cada funcionário
    return this.http.post(API_URL, convenio, { headers, observe: 'response' });
  }

  getById(searchId: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'funcionarios', // O X-Bin-Name aqui é mais para organização visual no JSONBin.io
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.get<Convenio>(`${API_URL}/${searchId}`, { headers, observe: 'response' });
  }
    delete(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.delete(`${API_URL}/${id}`, { headers, observe: 'response' });
  }
}
