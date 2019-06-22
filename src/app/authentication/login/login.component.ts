import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContribuableService } from 'src/app/services/contribuable.service';
import { Contribuable } from 'src/app/models/contribuable';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AppService } from '../shared/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectionError;
  connectedUser;
  contribuale: Contribuable=new Contribuable();
  errorMessage:string;
  loginForm: FormGroup;

  credentials = {
    username: '',
    password: ''
  };
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private contribuableService :ContribuableService,
      private fb: FormBuilder,
              private appService: AppService,
  ) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login(){
    console.log("this.credentials", this.credentials)

    this.appService.authenticate(this.credentials, ()=>{
      this.router.navigate(['/principal']);
    });

  }
    //this.router.navigate(['/principal']);

  
/*authentication() {
  console.log("datsdddssda")

  this.contribuableService.logIn(this.user).subscribe(data => {
    this.connectedUser = data;
    console.log("data", data)

    if (data !== null) {
    this.router.navigate(['/principal']);
    localStorage.setItem('connected', 'connected');
    localStorage.setItem('login', this.user.login);
    } else {
      this.connectionError = true;
    }
  }, error => {
    this.connectionError = true;
  }) 
}*/
}
