import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username:string='';
  password:string='';
  repeatpassword:string='';
  error:string='';
  user:User = new User(0,'','');



  constructor(private http:LoginService) {}

  ngOnInit(): void {
  }

  submit(){
    if(this.password != this.repeatpassword){this.error = 'Passwords No Not Match'}
    if(!this.username){this.error = 'You must enter a username'}
    if(!this.password){this.error = 'You must enter a password'}

    if(this.password  && this.username && this.password == this.repeatpassword){
    this.http.register(this.user).subscribe(
      (context)=>{
        if(context.id){this.error = 'A user with this username already exists';}
        else{
          this.error
        }
      }
    );

    }
  }
}
