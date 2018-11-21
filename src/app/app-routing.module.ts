import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//zrro理由配置
import { ZorTableComponent } from './zor-table/zor-table.component';
import { ZorInputComponent } from './zor-input/zor-input.component';
import { ZorCalendarComponent } from './zor-calendar/zor-calendar.component';
import { ZorHttpComponent } from './zor-http/zor-http.component';
//echar路由配置
import { EchBarComponent } from './ech-bar/ech-bar.component';
import { EchLineComponent } from './ech-line/ech-line.component';
import { EchRadarComponent } from './ech-radar/ech-radar.component';
import { EchScatterComponent } from './ech-scatter/ech-scatter.component';
import { ZorPageComponent } from './zor-page/zor-page.component';

//主页
import { IndexComponent } from './index/index.component';
//登录
import { LogoinComponent } from './logoin/logoin.component';
//路由守卫
import { LoginGuard } from './guard/login.guard';
//错误404
import { Err404Component } from './err404/err404.component';


const appChildRoutes:Routes=[
    {
        path:'',component:ZorTableComponent
    },
    {
        path:'input',component:ZorInputComponent
    },
    {
        path:'calendar',component:ZorCalendarComponent
    },
    {
        path:'http',component:ZorHttpComponent
    },
    {
        path:'bar',component:EchBarComponent
    },
    {
        path:'line',component:EchLineComponent
    },
    {
        path:'radar',component:EchRadarComponent
    },
    {
        path:'scatter',component:EchScatterComponent
    },
    {
        path:'page',component:ZorPageComponent
    }
]

const routes: Routes = [
    {
        path: '',   // 初始路由重定向[写在第一个]
        redirectTo: 'index',
        pathMatch: 'full'  // 必须要设置
    },
    {
      path:'login',
      component:LogoinComponent,
      canActivate: [LoginGuard],//登录 //需要守卫的路由
    },
    {
      path:'index',
      component:IndexComponent,
      children:appChildRoutes,
      canActivate:[LoginGuard]//需要守卫的路由
    },
    {
        path:'**',
        redirectTo:'index',
        pathMatch: 'full'  // 必须要设置
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard] //注入
})
export class AppRoutingModule { }
