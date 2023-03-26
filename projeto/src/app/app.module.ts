import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AplicacaoComponent } from './components/aplicacao/aplicacao.component';
import { ConceitosComponent } from './components/conceitos/conceitos.component';
import { FuncionamentoComponent } from './components/funcionamento/funcionamento.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacaoComponent,
    ConceitosComponent,
    FuncionamentoComponent,
    ExemplosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
