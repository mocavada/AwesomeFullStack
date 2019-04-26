import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit() {
  }

}
