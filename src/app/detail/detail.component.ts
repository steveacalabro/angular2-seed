import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../services/data/data.service';
import { DataModel } from '../models/dataModel.model';

@Component({
  selector: 'detail',
  styleUrls: ['./detail.component.css'],
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  data: Array<DataModel>;
  groupedData: Array<DataModel[]> = [];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(
      res => {
        this.data = res;

        Observable.from(this.data)
        .groupBy(
          x => JSON.stringify({ name: x.name })
        )
        .flatMap(group => group.reduce((acc, curr) => [...acc, curr], []))
        .subscribe(grouped => {
          this.groupedData.push(grouped);
        },()=>{}, () => {
          console.log(this.groupedData);
        });
      },
      err => {
        console.error('Error!: ', err);
      },
      () => { }
    );
  }

  addCategoryAmounts(row: DataModel[], col: string) {
    let catAmount = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i].category === col) {
        catAmount += row[i].amount;
      }
    }

    return (catAmount > 0) ? catAmount: '-';
  }
}
