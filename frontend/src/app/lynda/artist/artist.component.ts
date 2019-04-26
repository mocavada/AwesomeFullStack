import { SearchArtistPipe } from '../../services/custompipe/search-artist.pipe';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  query: string;
  artists: object;
  currentArtist: object;
  searchArtist: SearchArtistPipe;

  showArtist(item: any) {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }

  constructor( private http: HttpClient ) {
    this.query = '';

  }

  ngOnInit(): void {
    this.http.get<object[]>('assets/artist_data.json')
      .subscribe(data => {
      this.artists = data;
    });


  }

}
