import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoginService } from '../../services/login.service';
import { PersonModel } from '../../abstracts/person-model';

import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  answerLogin = '';

  projectName = 'DASHBOARD';
  _currentPerson: PersonModel;
  
  constructor(private _loginService: LoginService, private _router: Router) {
    this._currentPerson = new PersonModel();
  }

  ngOnInit(): void {
  }

  Login(): void {
    if (isNullOrUndefined(this._currentPerson.login) ||
      isNullOrUndefined(this._currentPerson.password)) {
      alert('Input can\'t be empty');
      return;
    }
    this._loginService.getLoginAnswer(this._currentPerson)
      .subscribe(result => {
        this._router.navigate(["/dashboard"]);
      },
      error => {
        alert(error);
      });
  }

}
