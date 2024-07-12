import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private backendUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  iniciarSesionSpotify(): Observable<string> {
    return this.http.get(`${this.backendUrl}/api/login`, { responseType: 'text' });
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(`${this.backendUrl}/api/user-profile`);
  }

  searchArtists(query: string): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/api/search-artists`, { params: { query } });
  }
}
