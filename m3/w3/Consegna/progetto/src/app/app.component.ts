import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    logged: boolean
    userLogged!: string[]



    constructor(private authSvc:AuthService, private router:Router){
      this.logged = authSvc.isLogged()
      if(localStorage.length==1){
      this.userLogged = Object.values(authSvc.getLogged())}
    }


  ngOnInit(): void {
    this.logged
    if(localStorage.length==1){
    this.userLogged[1]}
  }

  logout(){
    this.authSvc.logOut()
    this.router.navigate([''])
  }

  isCollapsed = false;
}
