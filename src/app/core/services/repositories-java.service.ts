import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesJavaService {

  constructor(private http: HttpClient) { }

  getRepositories(numberPage: number = 1): Observable<string> {
    const URL = `https://api.github.com/search/repositories?q=language:Java&sort=stars&page=${numberPage}`;
    return this.http.get<string>(URL)
  }

  getPullRequest(user: string, nameRepositorie: string){
    const URL = `https://api.github.com/repos/${user}/${nameRepositorie}/pulls`;
    return this.http.get<string>(URL)
  }
}
