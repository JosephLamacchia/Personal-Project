import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:LoginService,private router:Router){
    
  }
  username:string='';
  password:string='';
  error:string='';
  title = 'PersonalProject';
  user:User = new User(1,'','');

  login(){
  this.user.username = this.username.replace(/\s/g, '');
  this.user.password = this.password.replace(/\s/g, '');
  
  console.log(this.user.username);
  
  if(this.user.username && !this.user.password){this.error = 'Please Enter Password'}
  if(!this.user.username && this.user.password){this.error = 'Please Enter Username'}
  if(!this.user.username && !this.user.password){this.error = 'Please Enter Username and Password'}

  if(this.user.username && this.user.password){
  this.http.login(this.user).subscribe(
    (context)=>{
      if(context.id){
        localStorage.setItem('user',JSON.stringify(context));
        this.router.navigate(['/','home']);
      }
      else{this.error = 'User Not Found'}
    }
  )
  }}

  ngOnInit(): void {
  }

}
