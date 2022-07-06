import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitDetailsComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
