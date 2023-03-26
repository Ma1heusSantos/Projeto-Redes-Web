import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceitosComponent } from './components/conceitos/conceitos.component';
import { AplicacaoComponent} from './components/aplicacao/aplicacao.component';
import { ExemplosComponent } from './components/exemplos/exemplos.component';
import { FuncionamentoComponent } from './components/funcionamento/funcionamento.component';


const routes: Routes = [
  {path: 'conceitos',component: ConceitosComponent},
  {path: 'aplicacao',component: AplicacaoComponent},
  {path: 'exemplos',component: ExemplosComponent},
  {path: 'funcionamento',component: FuncionamentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
