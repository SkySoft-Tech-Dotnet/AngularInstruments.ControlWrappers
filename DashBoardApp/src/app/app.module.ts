import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';

import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardService } from './pages/dashboard/dashboard.service';

import { HomeComponent } from './pages/dashboard/home/home.component';
import { AboutComponent } from './pages/dashboard/about/about.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { InputMaskModule } from 'primeng/primeng';
import { DatePickerComponent } from './customComponents/date-picker/date-picker.component';
import { SstDataTableComponent } from './customComponents/sst-datatable/sst-datatable.component';
import { FormValidationComponent } from './customComponents/form-validation/form-validation.component';

import { ColumnsDefComponent } from './customComponents/sst-datatable/columns-def/columns-def.component';
import { ColumnComponent } from './customComponents/sst-datatable/columns-def/column/column.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    DatePickerComponent,
    SstDataTableComponent,
    FormValidationComponent,

    ColumnsDefComponent,
    ColumnComponent
  ],

  imports: [
    InputMaskModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      { path: '**', redirectTo: '' }
    ]),
  ],
  providers: [LoginService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
