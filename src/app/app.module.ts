import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GithubApiService } from './services/github-api.service';
import { InterceptorsService } from './services/interceptors.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService,
    { provide : HTTP_INTERCEPTORS, useClass : InterceptorsService, multi : true},
    { provide : HTTP_INTERCEPTORS, useClass : ErrorInterceptorService, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
