import { Component } from '@angular/core';
import {Router}from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUI';
  constructor(private myPoute:Router){};

  // //事件注册
  // routerBtn(url){
  //     this.myPoute.navigateByUrl(url)
  // }



}
