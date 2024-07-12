import { Component } from '@angular/core';
import { SpotifyAuthService } from '../spotify-auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userProfile: User | null = null;

  constructor(private spotifyAuthService: SpotifyAuthService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.spotifyAuthService.getUserProfile().subscribe(
      (response: User) => {
        this.userProfile = response;
        console.log('User profile loaded:', this.userProfile);
      },
      error => {
        console.error('Error loading user profile:', error);
      }
    );
  }
}
