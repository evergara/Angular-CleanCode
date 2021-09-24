import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import { AlbumGateway } from '../modelos/gateway/album-gateway';
import { Album } from './../modelos/album/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumUsesCase{
  constructor( private _albumGateWay: AlbumGateway) {}

  getAlbum(id: string): Observable<Album> {
    //TODO: En este sitio podríamos manejar las configuraciones
    //en cache
    return this._albumGateWay.getByID(id);
  }

  getAllAlbum(): Observable<Array<Album>> {
    return this._albumGateWay.getAll();
  }
}
