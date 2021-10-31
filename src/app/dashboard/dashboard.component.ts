import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'app/serviceses/object.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private os : ObjectService
  ) { }

  ngOnInit() {
    this.getModel()
  }

  modelList = [];

  getModel() {
    this.os.getModel().subscribe( res => {
      console.log(res)
      this.modelList.push(res)
    })
  }
}
