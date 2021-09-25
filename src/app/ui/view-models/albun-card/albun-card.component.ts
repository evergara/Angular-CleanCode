import { Component, OnInit } from '@angular/core';
import { AlbumUsesCase } from './../../../domain/usescase/album-use-case';

@Component({
  selector: 'app-albun-card',
  templateUrl: './albun-card.component.html',
  styleUrls: ['./albun-card.component.scss']
})
export class AlbunCardComponent implements OnInit {

  constructor(private _getAlbumUseCase : AlbumUsesCase) { }
  response$ ;
  datos;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbum('15');
    this.response$.subscribe (
      (data) => {
        this.datos = data;
      }
    );

  }

}
