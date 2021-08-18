import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataSource: Subject<string> = new Subject();

  public data: Observable<string> = this.dataSource.asObservable();

  public changeData(data: string) {
    this.dataSource.next(data);
  }

  constructor() { }
}
