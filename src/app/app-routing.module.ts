import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AfastamentosListComponent } from './pages/afastamentos/afastamentos-list/afastamentos-list.component';
import { AfastamentosCreateComponent } from './pages/afastamentos/afastamentos-create/afastamentos-create.component';
import { PaisesListComponent } from './pages/pais/paises-list/paises-list.component';
import { PaisesCreateComponent } from './pages/pais/paises-create/paises-create.component';
import { EstadosListComponent } from './pages/estados/estados-list/estados-list.component';
import { EstadosCreateComponent } from './pages/estados/estados-create/estados-create.component';
import { UnidadesListComponent } from './pages/unidades/unidades-list/unidades-list.component';
import { UnidadesCreateComponent } from './pages/unidades/unidades-create/unidades-create.component';
import { CargosListComponent } from './pages/cargos/cargos-list/cargos-list.component';
import { CargosCreateComponent } from './pages/cargos/cargos-create/cargos-create.component';
import { FuncoesListComponent } from './pages/funcoes/funcoes-list/funcoes-list.component';
import { FuncoesCreateComponent } from './pages/funcoes/funcoes-create/funcoes-create.component';
import { DesignacoesListComponent } from './pages/designacoes/designacoes-list/designacoes-list.component';
import { DesignacoesCreateComponent } from './pages/designacoes/designacoes-create/designacoes-create.component';
import { ServidoresListComponent } from './pages/servidores/servidores-list/servidores-list.component';
import { ServidoresCreateComponent } from './pages/servidores/servidores-create/servidores-create.component';
import { TerceirizadosListComponent } from './pages/terceirizados/terceirizados-list/terceirizados-list.component';
import { TerceirizadosCreateComponent } from './pages/terceirizados/terceirizados-create/terceirizados-create.component';
import { GenerosListComponent } from './pages/generos/generos-list/generos-list.component';
import { GenerosCreateComponent } from './pages/generos/generos-create/generos-create.component';
import { IndisponibilidadesListComponent } from './pages/indisponibilidades/indisponibilidades-list/indisponibilidades-list.component';
import { IndisponibilidadesCreateComponent } from './pages/indisponibilidades/indisponibilidades-create/indisponibilidades-create.component';
import { MunicipiosListComponent } from './pages/municipios/municipios-list/municipios-list.component';
import { MunicipiosCreateComponent } from './pages/municipios/municipios-create/municipios-create.component';
import { MunicipiosEditComponent } from './pages/municipios/municipios-edit/municipios-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { PaisesEditComponent } from './pages/pais/paises-edit/paises-edit.component';
import { EstadosEditComponent } from './pages/estados/estados-edit/estados-edit.component';
import { IndisponibilidadesEditComponent } from './pages/indisponibilidades/indisponibilidades-edit/indisponibilidades-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'afastamentos',
    children: [
      { path: '', component: AfastamentosListComponent },
      { path: 'create', component: AfastamentosCreateComponent },

    ],
  },

  {
    path: 'paises',
    children: [
      { path: '', component: PaisesListComponent },
      { path: 'create', component: PaisesCreateComponent },
      { path: ':id/edit', component: PaisesEditComponent },
    ],
  },

  {
    path: 'estados',
    children: [
      { path: '', component: EstadosListComponent },
      { path: 'create', component: EstadosCreateComponent },
      { path: ':id/edit', component: EstadosEditComponent },
    ],
  },

  {
    path: 'unidades',
    children: [
      { path: '', component: UnidadesListComponent },
      { path: 'create', component: UnidadesCreateComponent },
    ],
  },

  {
    path: 'cargos',
    children: [
      { path: '', component: CargosListComponent },
      { path: 'create', component: CargosCreateComponent },
    ],
  },

  {
    path: 'funcoes',
    children: [
      { path: '', component: FuncoesListComponent },
      { path: 'create', component: FuncoesCreateComponent },
    ],
  },

  {
    path: 'designacoes',
    children: [
      { path: '', component: DesignacoesListComponent },
      { path: 'create', component: DesignacoesCreateComponent },
    ],
  },

  {
    path: 'servidores',
    children: [
      { path: '', component: ServidoresListComponent },
      { path: 'create', component: ServidoresCreateComponent },
    ],
  },

  {
    path: 'terceirizados',
    children: [
      { path: '', component: TerceirizadosListComponent },
      { path: 'create', component: TerceirizadosCreateComponent },
    ],
  },

  {
    path: 'generos',
    children: [
      { path: '', component: GenerosListComponent },
      { path: 'create', component: GenerosCreateComponent },
    ],
  },

  {
    path: 'municipios',
    children: [
      { path: '', component: MunicipiosListComponent },
      { path: 'create', component: MunicipiosCreateComponent },
      { path: ':id/edit', component: MunicipiosEditComponent },
    ],
  },

  {
    path: 'indisponibilidades',
    children: [
      { path: '', component: IndisponibilidadesListComponent },
      { path: 'create', component: IndisponibilidadesCreateComponent },
      { path: ':id/edit', component: IndisponibilidadesEditComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
