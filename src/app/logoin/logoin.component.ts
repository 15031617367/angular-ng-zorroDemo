import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import userModel from '../model/user.model';
@Component({
  selector: 'app-logoin',
  templateUrl: './logoin.component.html',
  styleUrls: ['./logoin.component.css']
})
export class LogoinComponent implements OnInit {

  constructor(private myRouter:Router,private cookieService: CookieService) { }

  ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        }; 
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        }
  }

  //数据树
  nuser:string="";
  pws:any="";
  alterIf:boolean=false;
    //粒子数据
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  cookieValue = null;  
  //事件注册
  loginBtn(){
    this.cookieService.set('nuser',this.nuser);
    this.cookieService.set('pws',this.pws);
    
    if(this.nuser=="admin"&&this.pws=="admin"){
        userModel.isLogin=true
        console.log(userModel.isLogin)
        this.myRouter.navigate(['index']);
    }else{
        this.alterIf=true    
    }
  }
}
