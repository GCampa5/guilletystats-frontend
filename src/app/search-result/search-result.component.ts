import { Component } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { Observable, of } from 'rxjs';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  artists$: Observable<Artist[]> = of([]); 

  constructor(private searchDataService: SearchDataService) {}

  ngOnInit(): void {
    this.artists$ = this.searchDataService.artists$;
  }

  handleImageError(event: any) {
    event.target.src = './assets/defaultProfile.png';
  }

}
