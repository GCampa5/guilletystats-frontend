import { Component } from '@angular/core';
import { SpotifyAuthService } from '../spotify-auth.service';
import { SearchDataService } from '../search-data.service';
import { Router } from '@angular/router';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchQuery: string = '';

  constructor(
    private spotifyAuthService: SpotifyAuthService,
    private router: Router,
    private searchDataService: SearchDataService
  ) { }

  onSearch(): void {
    if (this.searchQuery.trim() !== '') {
      this.spotifyAuthService.searchArtists(this.searchQuery).subscribe({
        next: (response) => {
          console.log('Search results:', response);
          const artists: Artist[] = response.map((data: any) => new Artist(data));
          this.searchDataService.setArtists(artists);
          this.router.navigate(['/search-results']);
        },
        error: (error) => {
          console.error('Error searching for artists:', error);
        }
      });
    }
  }
}
