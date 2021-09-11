import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.password != this.repeatpassword){this.error = 'Passwords No Not Match'}
    if(!this.username){this.error = 'You must enter a username'}
    if(!this.password){this.error = 'You must enter a password'}

  }
}
