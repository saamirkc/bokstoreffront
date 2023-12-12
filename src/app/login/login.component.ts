import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from '../common/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password: '',
  };

  constructor(private snack: MatSnackBar, private login: LoginService,private router:Router) {
  }

  ngOnInit() {
  }

  formSubmit() {
    console.log("login btnclicked")
    if (this.loginData.username.trim() == "" || this.loginData.username == null) {
      this.snack.open("Username is required !!", "", {
        duration: 3000,
      });


    }
    if (this.loginData.password.trim() == "" || this.loginData.password == null) {
      this.snack.open("Password is required !!", "", {
        duration: 3000,
      });

    }
    //     generated token request
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        //success
        console.log('success');
        console.log(data);

        //login..
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //   REDIRECT ...ADMIN ::ADMIN DASHBOARD
            //REDIRECT ...NORMAL::USER-DASBOARD
            if(this.login.getUserRole()=="ADMIN"){
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
              // window.location.href= '/admin';
              //ADMIN DASHBOARD
            }else if(this.login.getUserRole()=="NORMAL") {
              this.router.navigate(['checkout']);
              this.login.loginStatusSubject.next(true);

              // window.location.href='/checkout';
              //normal user dashboard
            }else {
              this.login.logout();
            }
          }

        );


      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid details.Try again!!","",{
          duration:3000,
        })
      }
    );

  }

}

