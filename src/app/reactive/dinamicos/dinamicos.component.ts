import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name:[ '', [ Validators.required, Validators.minLength(3) ] ],
    add: this.fb.array( [
      ['Metal Gear', Validators.required ],
      ['Death Stranding', Validators.required ] 
    ], Validators.required )
  })

  newFavorite:FormControl = this.fb.control('', Validators.required )

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {}

  fieldValid(field:string){
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }

  save(){
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
    }
  }

  get addArr(){
    return this.miFormulario.get('add') as FormArray
  }

  addFavorite(){
    if (this.newFavorite.invalid) { return; }
    // this.addArr.push(this.fb.control(this.newFavorite.value))
    this.addArr.push( new FormControl(this.newFavorite.value) )
    this.newFavorite.reset()   
  }

  removeFavorite(i:number){
    this.addArr.removeAt(i)
  }

}
