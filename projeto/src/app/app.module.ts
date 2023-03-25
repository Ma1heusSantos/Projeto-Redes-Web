import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicacaoComponent } from './components/aplicacao/aplicacao.component';
import { ConceitosComponent } from './components/conceitos/conceitos.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacaoComponent,
    ConceitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
