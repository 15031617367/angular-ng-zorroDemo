import { Component, OnInit } from '@angular/core';
import {Router}from "@angular/router"
@Component({
  selector: 'app-zor-table',
  templateUrl: './zor-table.component.html',
  styleUrls: ['./zor-table.component.css']
})
export class ZorTableComponent implements OnInit {

  constructor(private myproter:Router) { }

  ngOnInit() {};


  //事件绑定
    //删除
    deleBtn(data,row,index){
        data.splice(index,1);
    };
    //模态框
    details(row){
		this.isVisible = true;
		this.ModelData.name=row.name;
		this.ModelData.Price=row.number;
		this.ModelData.state=row.state
	};
	handleOk(){
    	this.isVisible = false;
	};
	handleCancel(){
		this.isVisible = false;
    }
    //子页详情跳转
    Page(row){
        this.myproter.navigate(['index/page',row],{ skipLocationChange: true })
    }

  //数据数
    //表格数据
    dataSet = [
      {
        name   :"服务器",
        number    : 32,
        state:'未审核'
      },
      {
        name   : '服务器A-3',
        number    : 42,
        state:'未审核'
      },
      {
        name   : '服务器A-2',
        number    : 32,
        state:'未审核'
      }
	];
	//模态框状态
	isVisible = false;
	//模态框详情
	ModelData={
		name:null,
		Price:null,
		state:null
	}


  

}
