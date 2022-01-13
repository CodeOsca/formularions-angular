import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    this.scrollZero()
  }

  ngOnDestroy(){}

  scrollZero(){
    scrollTo(0,0)
  }

}
