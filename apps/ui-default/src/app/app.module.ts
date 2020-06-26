import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultApiComponent } from "./components/default-api/default-api.component";
import { DefaultApiService } from "./services/default-api.service";
import { SecondApiComponent } from "./components/second-api/second-api.component";
import { SecondApiService } from "./services/second-api.service";

@NgModule({
  declarations: [
    AppComponent,
    DefaultApiComponent,
    SecondApiComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    DefaultApiService,
    SecondApiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
