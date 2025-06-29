import { Injectable } from '@angular/core';
import { Especialidade } from '../models/especialidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL, X_ACCESS_KEY } from '../utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {
  delete(id: string) : Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
    return this.http.delete(`${API_URL}/${id}`, { headers, observe: 'response' });
  }

  getById(searchId: string) : Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        'X-Bin-Name':'especializacoes',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
     return this.http.get<Especialidade>(`${API_URL}/${searchId}`, { headers, observe: 'response' });
  }

  save(especialidade: Especialidade): Observable<any>{
     const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/json',
        'X-Bin-Name':'especializacoes',
        'X-ACCESS-KEY': X_ACCESS_KEY
      }
    );
     return this.http.post(API_URL, especialidade, { headers, observe: 'response' });
  }

    constructor(private http: HttpClient) {}
}
