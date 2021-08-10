import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'connected-companies',
  templateUrl: './connected-companies.component.html',
  styleUrls: ['./connected-companies.component.css']
})
export class ConnectedCompaniesComponent implements OnInit, OnChanges {

  @Input()
  public companies: Map<string, any> = new Map<string, any>();

  @Output()
  public companiesUpdater: EventEmitter<Map<string, any>> = new EventEmitter<Map<string, any>>();

  public invoices: string = ""

  private realmId: string = ""

  onCompaniesUpdater() {
    this.companiesUpdater.emit(this.companies);
  }

  public selectedCompany: string = "";
  
  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  printCompany(company: string): void {
    if (this.selectedCompany !== "") {
      this.selectedCompany = ""
      return
    }

    console.log(this.companies.get(company))
    this.selectedCompany = JSON.stringify(this.companies.get(company), undefined, 2);
  }

  public retrieveInvoices() {
    this.http.get<any>(
      'https://perso.dev.matrixrom.ro:10000/quickbooks/invoice/list',
      {
        headers: {
          "Realm-ID": Array.from(this.companies.keys())[0],
        }
      }
    ).subscribe((data: any) => {
      this.invoices = JSON.stringify(data.data, undefined, 2);
    })
  }
}
