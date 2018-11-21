import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-zor-page',
  templateUrl: './zor-page.component.html',
  styleUrls: ['./zor-page.component.css']
})
export class ZorPageComponent implements OnInit {

  constructor(private myRouter:ActivatedRoute) {}

  ngOnInit() {
    this.myRouter.params.subscribe((result:any)=>{
        this.listData.name=result.name;
        this.listData.number=result.number;
        this.listData.state=result.state;
    })
  }

  //数据树
  listData={
      name:null,
      number:null,
      state:null
  }




}
