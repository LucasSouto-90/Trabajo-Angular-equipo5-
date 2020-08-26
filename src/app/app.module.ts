import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibroNuevoComponent } from './libro-nuevo/libro-nuevo.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PrestarLibroComponent } from './prestar-libro/prestar-libro.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroNuevoComponent,
    ContenedorComponent,
    PrestarLibroComponent,
    ListarLibrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
