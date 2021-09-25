import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumApiServiceWithoutDelay } from './infraestructura/driven-adapter/albun-api/album-api-withou-delay.service';
import { AlbumApiService } from './infraestructura/driven-adapter/albun-api/album-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response$ ;
  datos;
  title = 'clean-arch-angular';
  constructor (private _albumApiService : AlbumApiServiceWithoutDelay){}
  //constructor (private _albumApiService : AlbumApiService){}
  ngOnInit(): void {}

  }
