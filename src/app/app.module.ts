import { SecondComponent } from './pages/second/second.component';
import { FirstComponent } from './pages/first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from './http/http.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
