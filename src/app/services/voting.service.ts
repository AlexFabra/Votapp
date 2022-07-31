import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { votingInfo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  options: votingInfo[] = [];

  constructor(private http: HttpClient) { }

  getOptions() {
    if (this.options.length === 0) {
      return this.http.get(environment.url + '/api/votes')
        .pipe(
          tap((res: any) => { this.options = res })
        )
    } else {
      return of(this.options);
    }
  }

  postVote(id: string) {
    return this.http.post(environment.url + '/api/votes/' + id, {})
    .pipe(
      catchError(error =>{
        return of(error.error)
      })
    )
  }

}
