import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConnectButtonComponent } from './connect-button/connect-button.component';
import { ConnectedCompaniesComponent } from './connected-companies/connected-companies.component';
import { DataRetrievalButtonComponent } from './data-retrieval-button/data-retrieval-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectButtonComponent,
    ConnectedCompaniesComponent,
    DataRetrievalButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
