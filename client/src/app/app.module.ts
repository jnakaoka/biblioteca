import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { MainComponent } from './containers/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { NewTestComponent } from './containers/new-test/new-test.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { importType } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    NavComponent,
    NewTestComponent,
    FormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
