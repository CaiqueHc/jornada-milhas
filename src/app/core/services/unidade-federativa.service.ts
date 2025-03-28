import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UnidadeFederativa } from '../types/types'

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private httpClient: HttpClient) { }

  listar() : Observable<UnidadeFederativa[]>{
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private requestEstados(): Observable<UnidadeFederativa[]> {
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
