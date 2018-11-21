import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//http配置
import { HttpModule} from "@angular/http";
//粒子插件
import { ParticlesModule } from 'angular-particle';
//cookie
import { CookieService } from 'ngx-cookie-service';

//配置UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

//zrrpUI文件配置
import { ZorTableComponent } from './zor-table/zor-table.component';
import { ZorInputComponent } from './zor-input/zor-input.component';
import { ZorCalendarComponent } from './zor-calendar/zor-calendar.component'
import { ZorHttpComponent } from './zor-http/zor-http.component';
//双向数据绑定&表单提交
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//echarts配置
import {NgxEchartsModule} from 'ngx-echarts';
//echarts页面
import { EchBarComponent } from './ech-bar/ech-bar.component';
import { EchLineComponent } from './ech-line/ech-line.component';
import { EchRadarComponent } from './ech-radar/ech-radar.component';
import { EchScatterComponent } from './ech-scatter/ech-scatter.component';
import { ZorPageComponent } from './zor-page/zor-page.component';
//主页
import { IndexComponent } from './index/index.component';
//登录
import { LogoinComponent } from './logoin/logoin.component';
//错误404
import { Err404Component } from './err404/err404.component';


@NgModule({
  declarations: [
    AppComponent,
    ZorTableComponent,
    ZorInputComponent,
    ZorCalendarComponent,
    ZorHttpComponent,
    EchBarComponent,
    EchLineComponent,
    EchRadarComponent,
    EchScatterComponent,
    ZorPageComponent,
    IndexComponent,
    LogoinComponent,
    Err404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxEchartsModule,
    ParticlesModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
