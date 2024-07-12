import { Component } from '@angular/core';
import { SpotifyAuthService } from '../spotify-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private spotifyAuthService: SpotifyAuthService) { }

  iniciarSesion(): void {
    this.spotifyAuthService.iniciarSesionSpotify().subscribe({
      next: (response: string) => {
        window.location.href = response; // Redirigir a la URL de autorización de Spotify
      },
      error: (error) => {
        console.error('Error al iniciar sesión con Spotify', error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    });
  }
}