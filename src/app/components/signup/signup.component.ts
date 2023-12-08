import {Component, OnInit} from '@angular/core';
import {UserService} from '../../common/user.service';
import Swal from 'sweetalert2';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService , private  snack: MatSnackBar , private _router:Router) {
  }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''


  };

  ngOnInit() {
  }

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('User is required!!!');
      this.snack.open('Username is required!!', '', {
        duration: 3000,
      });
      return;

    }
    // adding user
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //   success
        console.log(data);
        // alert('success');
        Swal.fire('Successfully done', 'User id is ' + data.id, 'success');
        this._router.navigate(['/checkout']);
      },
      (error) => {
        // error
        console.log(error);
        // alert("Something went wrong");
        this.snack.open('Something went wrong !!', '' , {
          duration: 3000,




      });

  }
)

}

}
