import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as Env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private state: BehaviorSubject<string> = new BehaviorSubject<string>('');
  //public state$: Observable<string> = this.state.asObservable();

  constructor(private http: HttpClient) { }


  get(): Observable<any> {    
    return this.http.get(Env.apiUrl + '/noticias?populate=*');
  }
}