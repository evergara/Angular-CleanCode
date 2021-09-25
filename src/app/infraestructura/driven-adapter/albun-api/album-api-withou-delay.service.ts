import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/domain/modelos/album/album';
import { environment } from 'src/environments/environment';
import { AlbumGateway } from '../../../domain/modelos/gateway/album-gateway';
import { HttpService } from '../httpClient/http.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumApiServiceWithoutDelay extends AlbumGateway{
  private API: string;

  constructor(private http: HttpService) {
    super();
    this.API = environment.api_album;
  }

  getByID(id: String): Observable<Album> {
    return this.http.get(this.API+id);
  }
  getAll(): Observable<Album[]> {
    return this.http.get(this.API);
  }
  saveNew(_alb: Album): Observable<void> {
    //TODO: opetacion por implemntar
    throw new Error('Method not implemented.');
  }

}
