import { Component, OnInit } from '@angular/core';
//创建表单注入
import {FormBuilder,FormGroup} from"@angular/forms"



@Component({
  selector: 'app-zor-input',
  templateUrl: './zor-input.component.html',
  styleUrls: ['./zor-input.component.css']
})
export class ZorInputComponent implements OnInit {
    validateForm:FormGroup;
    constructor(private fb:FormBuilder) {}

    ngOnInit() {
        this.validateForm=this.fb.group({
            'userName':[''],
            'passWord':['']
        })
    }

    //事件注册
    submitForm(){
        console.log("测试按钮");
        console.log(this.validateForm.value)
    }




}
