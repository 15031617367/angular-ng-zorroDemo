import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";
import userModel from '../model/user.model';

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private router: Router) { }
     //返回值true;跳转到当前路由；false不跳转到当前路由
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        //当前的路由名称
        var path=route.routeConfig.path;
        //nextRoute：设置需要路由守卫的路由集合
        const nextRoute = ['index'];
        let isLogin = userModel.isLogin; //是否为登录状态
        //当前路由是nextRoute指定页时
        if (nextRoute.indexOf(path) >= 0) {
            if (!isLogin) {
              // 未登录，跳转到login
              this.router.navigate(['login']);
              return false;
            }else{
              // 已登录，跳转到当前路由
              return true;
            }
        }
         // 当前路由是login时 
        if (path === 'login') {
            if (!isLogin) {
            // 未登录，跳转到当前路由
            return true;
            }else{
            // 已登录，跳转到index
            this.router.navigate(['index']);
            return false;
            }
        }
        
    }

}