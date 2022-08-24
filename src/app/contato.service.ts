import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient ) { }

  getContatos(){
    return this.http.get('http://localhost:8080/contatos');
  }
}
