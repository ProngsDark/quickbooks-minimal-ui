import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectButtonComponent } from './connect-button/connect-button.component';
import { ConnectedCompaniesComponent } from './connected-companies/connected-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectButtonComponent,
    ConnectedCompaniesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
