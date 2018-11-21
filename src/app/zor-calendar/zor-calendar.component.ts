import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zor-calendar',
  templateUrl: './zor-calendar.component.html',
  styleUrls: ['./zor-calendar.component.css']
})
export class ZorCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //数据 
  // date = new Date();
  // mode = 'month';
  listDataMap = {
    eight : [
      { type: 'warning', content: '张三' },
      { type: 'success', content: '张三' }
    ],
    ten   : [
      { type: 'warning', content: '张三' },
      { type: 'success', content: '张三' },
      { type: 'error', content: '张三' }
    ],
    eleven: [
      { type: 'warning', content: '张三' },
      { type: 'success', content: '张三' },
      { type: 'error', content: '张三' },
      { type: 'error', content: '张三' },
      { type: 'error', content: '张三' },
      { type: 'error', content: '张三' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
  //事件注册
}
