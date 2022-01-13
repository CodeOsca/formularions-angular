import { Component, OnInit } from '@angular/core';

interface MenuItem{
  texto:string;
  route:string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  templateRoutes:MenuItem[] = []
  reactiveRoutes:MenuItem[] = []
  authRoutes:MenuItem[] = []
  constructor() { }

  ngOnInit(): void {
    this.loadItemsMenu()
  }

  loadItemsMenu(){
    this.templateRoutes = [
      {
        texto:'Básicos',
        route: './template/basicos'
      },
      {
        texto:'Dinamicos',
        route: './template/dinamicos'
      },
      {
        texto:'Switches',
        route: './template/switches'
      },
    ]
    this.reactiveRoutes = [
      {
        texto:'Básicos',
        route: './reactive/basicos'
      },
      {
        texto:'Dinamicos',
        route: './reactive/dinamicos'
      },
      {
        texto:'Switches',
        route: './reactive/switches'
      },
    ],
    this.authRoutes = [
      {
        texto:'Login',
        route: './auth/login'
      },
      {
        texto:'Register',
        route: './auth/register'
      }
    ]
  }

}
