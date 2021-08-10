import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public companies: Map<string, any> = new Map<string, any>();

  constructor (private http: HttpClient) {}

  ngOnInit(): void {
    const urlSearch: string = window.location.search
    const urlParams: URLSearchParams = new URLSearchParams(urlSearch)

    const code: string|null = urlParams.get('code')
    const realmId: string|null = urlParams.get('realmId')

    if (code !== null && realmId !== null) {
        this.http.post<any>(
          'https://perso.dev.matrixrom.ro:9000/quickbooks/oauth/code',
          null,
          {
            headers: {
              'Authorization': code,
              'Realm-ID': realmId,
              'Protocol-Version': 'v1'
            }
          }
        ).subscribe((companyInfo: any) => {
          this.companies.set(companyInfo.data.realmId, companyInfo.data)
          
        })
    }
  }

  title = 'quickbooks-frontend';
}
