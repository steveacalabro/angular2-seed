import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data/data.service';
import { DataModel } from '../models/dataModel.model';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data: Array<DataModel>;
  sortDir: string = 'asc';

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      err => {
        console.error('Error!: ', err);
      },
      () => { }
    );
  }

  sort(col: string) {
    console.log("sort");
    if (this.sortDir === 'asc') {
      // Desc action
      this.sortDir = 'desc';
      this.data.sort((obj1, obj2) => {
        if (typeof obj1[col] === 'number') {
          return obj2[col] - obj1[col];
        } else {
          // Must be string or something else
          if(obj1[col] < obj2[col]) return 1;
          if(obj1[col] > obj2[col]) return -1;

          return 0;
        }
      });
    } else {
      // Asc action
      this.sortDir = 'asc';
      this.data.sort((obj1, obj2) => {
        if (typeof obj1[col] === 'number') {
          return obj1[col] - obj2[col];
        } else {
          // Must be string or something else
          if(obj1[col] < obj2[col]) return -1;
          if(obj1[col] > obj2[col]) return 1;

          return 0;
        }
      });
    }
  }
}
