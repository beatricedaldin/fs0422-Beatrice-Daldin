import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!:FormGroup

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(8)
      ]),
      email: new FormControl(null,
        [Validators.required, Validators.email]),
      role: new FormControl('user')
      })
  }

  getControl(y: string){
    return this.form.get(y)
  }

  checkFullValidity(y:string){
    return this.getControl(y)?.invalid && this.getControl(y)?.touched &&  this.getControl(y)?.dirty
  }

  

  //user:User = new User("", "", "")
 

  add(): void{
    this.authSvc.signup(this.form.value).subscribe(res =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Welcome in our Community!',
        text:`${res.user.username} just got the rights to do a lot of things on this Forum!`,
        showConfirmButton: false,
        timer: 2000
    })
    this.router.navigate(['/login'])})
    
  }

}
