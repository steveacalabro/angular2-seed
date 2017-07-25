import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DataModel } from '../../models/dataModel.model';

@Injectable()
export class DataServiceProvider {
  constructor(public http: Http) { }

  getData(): Observable<DataModel> {
    return this.http.get(`../../data/data.json`)
      .map((res: Response) => {
        return <DataModel>res.json();
      })
      .catch((error) => {
        console.error(error.json());
        return Observable.throw('Error getting data!: ', error);
      });
  }
}
