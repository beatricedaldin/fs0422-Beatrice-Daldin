import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ILogin } from './ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  data:ILogin = {
    email: '',
    password: ''
  }


  save(){
    this.authSvc.login(this.data)
    .subscribe(res=>{ 
        this.authSvc.saveAccessData(res)
        this.router.navigate(['']);
    })
  }

}
