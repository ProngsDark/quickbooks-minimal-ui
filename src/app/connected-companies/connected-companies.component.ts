import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Button } from '../data-retrieval-button/button';
import { DataServiceService } from '../data-service.service';

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

  public data: string = ""

  @Input()
  public realmId: string = ""

  public buttons: Array<Button> = new Array<Button>();

  onCompaniesUpdater() {
    this.companiesUpdater.emit(this.companies);
  }

  public selectedCompany: string = "";
  
  constructor(private http: HttpClient, private dataService: DataServiceService) {
    dataService.data.subscribe(data => {
      this.data = data
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    let baseUrl = "https://perso2.matrixrom.ro:9000/quickbooks"

    let invoiceButton: Button = new Button("Get Invoices", baseUrl + "/invoice/list", this.realmId)
    let billButton: Button = new Button("Get Bills", baseUrl + "/bill/list", this.realmId)
    let customerButton: Button = new Button("Get Customers", baseUrl + "/customer/list", this.realmId)
    let paymentButton: Button = new Button("Get Payment", baseUrl + "/payment/list", this.realmId)
    let plButton:Button = new Button("Get Profit and Loss", baseUrl + "/profit-and-loss", this.realmId)
    let apagingButton: Button = new Button("Get Aged Payables", baseUrl + "/apaging", this.realmId)
    let aragingButton: Button = new Button("Get Aged Receivables", baseUrl + "/araging", this.realmId)
    let vendorButton: Button = new Button("Get Vendors", baseUrl + "/vendor/list", this.realmId)
    let accountButton: Button = new Button("Get Accounts", baseUrl + "/account/list", this.realmId)
    let billpayment: Button = new Button("Get Bill Payments", baseUrl + "/bill-payment/list", this.realmId)

    this.buttons = Array.of(invoiceButton, billButton, customerButton, paymentButton, plButton, apagingButton, aragingButton, vendorButton, accountButton, billpayment)
  }

  printCompany(company: string): void {
    if (this.selectedCompany !== "") {
      this.selectedCompany = ""
      return
    }

    console.log(this.companies.get(company))
    this.selectedCompany = JSON.stringify(this.companies.get(company), undefined, 2);
  }
}
