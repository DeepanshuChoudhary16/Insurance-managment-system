import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiUrl = 'http://localhost:8080/policy';

  constructor(private http: HttpClient) { }

  addPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(this.apiUrl, policy);
  }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.apiUrl);
  }
  deletePolicy(id: number) {
  return this.http.delete(`${this.apiUrl}/${id}`, {
    responseType: 'text'
  });
  
}
updatePolicy(id: number, policy: Policy) {
  return this.http.put<Policy>(
    `${this.apiUrl}/${id}`,
    policy
  );
}
}