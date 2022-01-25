import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: string; //username
  password!: string;
  errMsg!: string; //error message that appears when you fail to log

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // The default access are given for avoiding to type them//
    // Of course, in a commercial app, they will not be visible //
    this.user = 'Administrateur';
    this.password = 'azerty';
  }

  onSubmitLogForm(): void {
    this.errMsg = 'Wrong way';

    //allow to access the series-list view //
    this.loginService
      .signin(this.user, this.password)
      .then(() => {
        this.router.navigateByUrl('/series');
      })
      //reject of the promise for sending the error message //
      .catch((errMsg) => {
        this.errMsg = errMsg;
      });
  }
}
