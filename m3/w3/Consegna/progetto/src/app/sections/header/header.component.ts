import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {




  constructor(private authSvc:AuthService){
    
  }


ngOnInit(): void {
}

userLogged(){
  if(localStorage.length==1){
     let userLogged: string[] = Object.values(this.authSvc.getLogged())
     var usernameU:string =  userLogged[1]
     return usernameU
    }else{
     return null
    }
    
}

logged(){
  let logged: boolean = this.authSvc.isLogged()
  return logged
}

logout(){
  this.authSvc.logOut()
}
  isCollapsed = false;
}
