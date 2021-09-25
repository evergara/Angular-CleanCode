import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './ui/shared/preloader/preloader.component';
import { AlbunCardComponent } from './ui/view-models/albun-card/albun-card.component';
import { AlbumGateway } from './domain/modelos/gateway/album-gateway';
import { AlbumApiService } from './infraestructura/driven-adapter/albun-api/album-api.service';
import { AlbumApiServiceWithoutDelay } from './infraestructura/driven-adapter/albun-api/album-api-withou-delay.service';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    AlbunCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: AlbumGateway, useClass: AlbumApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
