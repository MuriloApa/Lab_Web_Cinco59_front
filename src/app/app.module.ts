import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './layout/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PaisesListComponent } from './pages/pais/paises-list/paises-list.component';
import { EstadosListComponent } from './pages/estados/estados-list/estados-list.component';
import { UnidadesListComponent } from './pages/unidades/unidades-list/unidades-list.component';
import { CargosListComponent } from './pages/cargos/cargos-list/cargos-list.component';
import { DesignacoesListComponent } from './pages/designacoes/designacoes-list/designacoes-list.component';
import { ServidoresListComponent } from './pages/servidores/servidores-list/servidores-list.component';
import { TerceirizadosListComponent } from './pages/terceirizados/terceirizados-list/terceirizados-list.component';
import { AfastamentosListComponent } from './pages/afastamentos/afastamentos-list/afastamentos-list.component';
import { IndisponibilidadesListComponent } from './pages/indisponibilidades/indisponibilidades-list/indisponibilidades-list.component';
import { GenerosListComponent } from './pages/generos/generos-list/generos-list.component';
import { PaisesCreateComponent } from './pages/pais/paises-create/paises-create.component';
import { FuncoesCreateComponent } from './pages/funcoes/funcoes-create/funcoes-create.component';
import { GenerosCreateComponent } from './pages/generos/generos-create/generos-create.component';
import { IndisponibilidadesCreateComponent } from './pages/indisponibilidades/indisponibilidades-create/indisponibilidades-create.component';
import { AfastamentosCreateComponent } from './pages/afastamentos/afastamentos-create/afastamentos-create.component';
import { TerceirizadosCreateComponent } from './pages/terceirizados/terceirizados-create/terceirizados-create.component';
import { ServidoresCreateComponent } from './pages/servidores/servidores-create/servidores-create.component';
import { DesignacoesCreateComponent } from './pages/designacoes/designacoes-create/designacoes-create.component';
import { CargosCreateComponent } from './pages/cargos/cargos-create/cargos-create.component';
import { UnidadesCreateComponent } from './pages/unidades/unidades-create/unidades-create.component';
import { EstadosCreateComponent } from './pages/estados/estados-create/estados-create.component';
import { FuncoesListComponent } from './pages/funcoes/funcoes-list/funcoes-list.component';
import { MunicipiosListComponent } from './pages/municipios/municipios-list/municipios-list.component';
import { MunicipiosCreateComponent } from './pages/municipios/municipios-create/municipios-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MunicipiosEditComponent } from './pages/municipios/municipios-edit/municipios-edit.component';
import { MunicipiosDeleteComponent } from './pages/municipios/municipios-delete/municipios-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PageComponent } from './layout/page/page.component';
import { LoginComponent } from './pages/login/login.component';
import { PaisesEditComponent } from './pages/pais/paises-edit/paises-edit.component';
import { PaisesDeleteComponent } from './pages/pais/paises-delete/paises-delete.component';
import { EstadosEditComponent } from './pages/estados/estados-edit/estados-edit.component';
import { EstadosDeleteComponent } from './pages/estados/estados-delete/estados-delete.component';
import { CargosEditComponent } from './pages/cargos/cargos-edit/cargos-edit.component';
import { CargosDeleteComponent } from './pages/cargos/cargos-delete/cargos-delete.component';
import { IndisponibilidadesDeleteComponent } from './pages/indisponibilidades/indisponibilidades-delete/indisponibilidades-delete.component';
import { IndisponibilidadesEditComponent } from './pages/indisponibilidades/indisponibilidades-edit/indisponibilidades-edit.component';
import { FuncoesEditComponent } from './pages/funcoes/funcoes-edit/funcoes-edit.component';
import { FuncoesDeleteComponent } from './pages/funcoes/funcoes-delete/funcoes-delete.component';
import { GenerosEditComponent } from './pages/generos/generos-edit/generos-edit.component';
import { GenerosDeleteComponent } from './pages/generos/generos-delete/generos-delete.component';
import { ServidoresEditComponent } from './pages/servidores/servidores-edit/servidores-edit.component';
import { ServidoresDeleteComponent } from './pages/servidores/servidores-delete/servidores-delete.component';
import { JwtAuthInterceptor } from './interceptors/jwtAuth.interceptor';
import { JsonDateInterceptor } from './interceptors/json-date.interceptor';
import { AfastamentosEditComponent } from './pages/afastamentos/afastamentos-edit/afastamentos-edit.component';
import { AfastamentosDeleteComponent } from './pages/afastamentos/afastamentos-delete/afastamentos-delete.component';
import { UnidadesDeleteComponent } from './pages/unidades/unidades-delete/unidades-delete.component';
import { UnidadesEditComponent } from './pages/unidades/unidades-edit/unidades-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PaisesListComponent,
    EstadosListComponent,
    UnidadesListComponent,
    CargosListComponent,
    DesignacoesListComponent,
    FuncoesListComponent,
    ServidoresListComponent,
    TerceirizadosListComponent,
    AfastamentosListComponent,
    IndisponibilidadesListComponent,
    GenerosListComponent,
    PaisesCreateComponent,
    FuncoesCreateComponent,
    GenerosCreateComponent,
    IndisponibilidadesCreateComponent,
    AfastamentosCreateComponent,
    TerceirizadosCreateComponent,
    ServidoresCreateComponent,
    DesignacoesCreateComponent,
    CargosCreateComponent,
    UnidadesCreateComponent,
    EstadosCreateComponent,
    MunicipiosListComponent,
    MunicipiosCreateComponent,
    MunicipiosEditComponent,
    MunicipiosDeleteComponent,
    PageComponent,
    LoginComponent,
    PaisesEditComponent,
    PaisesDeleteComponent,
    EstadosEditComponent,
    EstadosDeleteComponent,
    CargosEditComponent,
    CargosDeleteComponent,
    IndisponibilidadesDeleteComponent,
    IndisponibilidadesEditComponent,
    FuncoesEditComponent,
    FuncoesDeleteComponent,
    GenerosEditComponent,
    GenerosDeleteComponent,
    ServidoresEditComponent,
    ServidoresDeleteComponent,
    AfastamentosEditComponent,
    AfastamentosDeleteComponent,
    UnidadesDeleteComponent,
    UnidadesEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
