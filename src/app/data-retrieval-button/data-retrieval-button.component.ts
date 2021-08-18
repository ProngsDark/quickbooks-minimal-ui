import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'data-retrieval-button',
  templateUrl: './data-retrieval-button.component.html',
  styleUrls: ['./data-retrieval-button.component.css']
})
export class DataRetrievalButtonComponent implements OnInit {

  @Input()
  public endpoint: string = ""
  @Input()
  public realmId: string = ""
  @Input()
  public buttonName: string = ""
  public data: string = ""

  constructor(private http: HttpClient, private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  public retrieveData () {
    this.http.get<any>(
      this.endpoint,
      {
        headers: {
          "Realm-ID": this.realmId,
        }
      }
    ).subscribe((data: any) => {
      this.data = JSON.stringify(data.data, undefined, 2);
      this.dataService.changeData(this.data)
    })
  }

}
