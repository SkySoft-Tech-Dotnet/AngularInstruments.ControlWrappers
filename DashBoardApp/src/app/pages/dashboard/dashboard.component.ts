import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { DashboardService } from '../../services/dashboard.service';
import { PersonModel } from '../../abstracts/person-model';


import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _loginedUser: PersonModel;

  constructor(private _dashboardService: DashboardService,
    private _router: Router) {
    this._loginedUser = new PersonModel();
  }

  ngOnInit() {
    this.LoginedUser();
  }

  LoginedUser(): void {
    this._dashboardService.getLoginedUser()
      .subscribe(result => {
        this._loginedUser = result;
      },
      error => {
        alert(error);
      });
  }


}
