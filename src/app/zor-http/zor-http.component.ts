import { Component, OnInit } from '@angular/core';
//HTTP请求注入
import { Http  , ResponseOptions , Headers  , URLSearchParams } from '@angular/http';
//配置jquery
import *as $ from 'jquery'

@Component({
  selector: 'app-zor-http',
  templateUrl: './zor-http.component.html',
  styleUrls: ['./zor-http.component.css']
})
export class ZorHttpComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }
  //事件注册
    //get方法
    get_btn(){ 
        var paramsa={
        id:'1',
        name:'张三'
        }
        this.http.get("https://fanyi.baidu.com",{params:paramsa})
        .subscribe(function(data){
        console.log(data);
        console.log("请求成功")
        },function(err){
        console.log(err);
        console.log("请求失败")
        });
    }

    //post方法
    post_btn(){
        const   d = new URLSearchParams();
        d.append('id',   '1' );
        d.append('name',   '张三' );
        this.http.post("https://fanyi.baidu.com",d)
        .subscribe(function(data){
            console.log(data);
            console.log("请求成功")
        },function(err){
            console.log(err);
            console.log("请求失败")
        });
    }
    //jQuery
    btnjq(){
        console.log("asdsd");
        console.log($("#jQ"))
    }


}
