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
import { FuncoesEditComponent } from './pages/funcoes/funcoes-edit/funcoes-edit.component';
import { GenerosEditComponent } from './pages/generos/generos-edit/generos-edit.component';
import { ServidoresEditComponent } from './pages/servidores/servidores-edit/servidores-edit.component';
import { PageComponent } from './layout/page/page.component';
import { AuthenticationGuard } from './guards/Authentication.guard';
import { AfastamentosEditComponent } from './pages/afastamentos/afastamentos-edit/afastamentos-edit.component';
import { Role } from './shared/enums/roles.enum';
import { AuthorizationGuard } from './guards/Authorization.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: PageComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    children: [
      {
        path: 'afastamentos',
        data: { Roles: [Role.ADMIN, Role.COMUM] },
        canActivate: [AuthorizationGuard],
        children: [
          {
            path: '',
            component: AfastamentosListComponent,
            data: { Roles: [Role.COMUM, Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
          {
            path: 'create',
            component: AfastamentosCreateComponent,
            data: { Roles: [Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
          {
            path: ':id/edit',
            component: AfastamentosEditComponent,
            data: { Roles: [Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
        ],
      },

      {
        path: 'paises',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: PaisesListComponent },
          { path: 'create', component: PaisesCreateComponent },
          { path: ':id/edit', component: PaisesEditComponent },
        ],
      },

      {
        path: 'estados',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: EstadosListComponent },
          { path: 'create', component: EstadosCreateComponent },
          { path: ':id/edit', component: EstadosEditComponent },
        ],
      },

      {
        path: 'unidades',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: UnidadesListComponent },
          { path: 'create', component: UnidadesCreateComponent },
        ],
      },

      {
        path: 'cargos',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: CargosListComponent },
          { path: 'create', component: CargosCreateComponent },
        ],
      },

      {
        path: 'funcoes',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: FuncoesListComponent },
          { path: 'create', component: FuncoesCreateComponent },
          { path: ':id/edit', component: FuncoesEditComponent },
        ],
      },

      {
        path: 'designacoes',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: DesignacoesListComponent },
          { path: 'create', component: DesignacoesCreateComponent },
        ],
      },

      {
        path: 'servidores',
        data: { Roles: [Role.ADMIN, Role.COMUM] },
        canActivate: [AuthorizationGuard],
        children: [
          {
            path: '',
            component: ServidoresListComponent,
            data: { Roles: [Role.ADMIN, Role.COMUM] },
            canActivate: [AuthorizationGuard],
          },
          {
            path: 'create',
            component: ServidoresCreateComponent,
            data: { Roles: [Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
          {
            path: ':id/edit',
            component: ServidoresEditComponent,
            data: { Roles: [Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
        ],
      },

      {
        path: 'terceirizados',
        data: { Roles: [Role.ADMIN, Role.COMUM] },
        canActivate: [AuthorizationGuard],
        children: [
          {
            path: '',
            component: TerceirizadosListComponent,
            data: { Roles: [Role.ADMIN, Role.COMUM] },
            canActivate: [AuthorizationGuard],
          },
          {
            path: 'create',
            component: TerceirizadosCreateComponent,
            data: { Roles: [Role.ADMIN] },
            canActivate: [AuthorizationGuard],
          },
        ],
      },

      {
        path: 'generos',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: GenerosListComponent },
          { path: 'create', component: GenerosCreateComponent },
          { path: ':id/edit', component: GenerosEditComponent },
        ],
      },

      {
        path: 'municipios',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: MunicipiosListComponent },
          { path: 'create', component: MunicipiosCreateComponent },
          { path: ':id/edit', component: MunicipiosEditComponent },
        ],
      },

      {
        path: 'indisponibilidades',
        data: { Roles: [Role.ADMIN] },
        canActivate: [AuthorizationGuard],
        canActivateChild: [AuthorizationGuard],
        children: [
          { path: '', component: IndisponibilidadesListComponent },
          { path: 'create', component: IndisponibilidadesCreateComponent },
          { path: ':id/edit', component: IndisponibilidadesEditComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
