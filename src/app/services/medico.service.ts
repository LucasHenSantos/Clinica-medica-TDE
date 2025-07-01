import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model'; // Importa o modelo Medico
import { API_URL, X_ACCESS_KEY } from '../utils/constants'; // Importa as constantes da API

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  // Método para salvar um novo médico
  save(medico: Medico): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'medicos', // Nome do seu "bin" para médicos no JSONBin.io
        'X-ACCESS-KEY': X_ACCESS_KEY // Sua chave de acesso
      }
    );
    // Realiza a requisição POST para a API
    return this.http.post(API_URL, medico, { headers, observe: 'response' });
  }

  // Método para deletar um médico (opcional, mas bom ter)
  delete(id: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.delete(`${API_URL}/${id}`, { headers, observe: 'response' });
  }

  // Método para obter um médico por ID (opcional, mas bom ter)
  getById(searchId: string): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Bin-Name': 'medicos',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.get<Medico>(`${API_URL}/${searchId}`, { headers, observe: 'response' });
  }
}