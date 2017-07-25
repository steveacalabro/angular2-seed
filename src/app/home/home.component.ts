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

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe(
      res => {
        this.data = res;
        console.log(this.data);
      },
      err => {
        console.error('Error!: ', err);
      },
      () => {}
    );
  }
}
