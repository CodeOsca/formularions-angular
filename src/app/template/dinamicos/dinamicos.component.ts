import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  @ViewChild('myform') myform!:NgForm
  constructor() { }
  ngOnInit(): void {}

  save(){}

  inputValid(field:string):boolean{
    return false;
  }
}
