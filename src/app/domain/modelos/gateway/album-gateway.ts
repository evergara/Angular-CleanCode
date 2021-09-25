import { Observable } from 'rxjs';
import { Album } from '../album/album';

/**
 * Se crea los puertos abctratos porque queremos que en algun momento
 * en la capa de infaestructura se creen varias api puedan implementar
 * las mismos casos de usos porque estamos definiendo que queremos en lano del como
 */
export abstract class AlbumGateway {
    abstract getByID(id: String): Observable<Album>;
    abstract getAll(): Observable<Array<Album>>;
    abstract saveNew (_alb :Album) : Observable<void>;
}
