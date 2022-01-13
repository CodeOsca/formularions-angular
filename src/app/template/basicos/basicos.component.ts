import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  @ViewChild('miformulario') myForm!:NgForm

  constructor() { }

  ngOnInit(): void {}

  save(){
    this.myForm.resetForm({
      precio:0,
      existencias:0
    })
  }

  inputValid(field:string):boolean{
    return this.myForm?.controls[field]?.invalid && this.myForm?.controls[field]?.touched
  }

  priceValid():boolean{
    return this.myForm?.controls.precio?.touched && this.myForm?.controls.precio?.value < 0;
  }

}
