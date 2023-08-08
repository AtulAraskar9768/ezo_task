import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './common-component/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ezoHttpInterceptor } from './common-service/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   
    NgxSpinnerModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ezoHttpInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
