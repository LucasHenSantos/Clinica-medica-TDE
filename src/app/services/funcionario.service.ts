import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model'; // Importa o modelo Funcionario
import { API_URL, X_ACCESS_KEY } from '../utils/constants'; // Importa as constantes da API

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  // Método para salvar um novo funcionário
  save(funcionario: Funcionario): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'funcionarios', // Nome do seu "bin" para funcionários no JSONBin.io
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    // Realiza a requisição POST para a API, criando um novo bin para cada funcionário
    return this.http.post(API_URL, funcionario, { headers, observe: 'response' });
  }

  // Métodos adicionais (opcional, mas recomendado para listar, buscar e deletar funcionários)

  // Método para obter um funcionário por ID
  getById(searchId: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'funcionarios', // O X-Bin-Name aqui é mais para organização visual no JSONBin.io
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.get<Funcionario>(`${API_URL}/${searchId}`, { headers, observe: 'response' });
  }

  // Método para deletar um funcionário por ID
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