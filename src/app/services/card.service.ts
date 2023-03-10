import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private url: string = 'www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private httpClient: HttpClient) {}

  getData(name: string): Observable<any> {
    return this.httpClient.get(this.url + name);
  }
}
