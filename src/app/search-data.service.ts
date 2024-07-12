import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artist } from './model/artist';


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  private artistsSubject: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>([]);
  artists$: Observable<Artist[]> = this.artistsSubject.asObservable();

  constructor() {}

  setArtists(artists: Artist[]): void {
    this.artistsSubject.next(artists);
  }
}
