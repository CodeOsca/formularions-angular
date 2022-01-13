import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario:FormGroup = new FormGroup({
  //   'name': new FormControl('RTX 4080ti'),
  //   'price': new FormControl(0),
  //   'existencia': new FormControl(5)
  // })

  miFormulario:FormGroup = this.fb.group({
    name: [ , [ Validators.required, Validators.minLength(3) ] ],
    price: [ , [ Validators.required, Validators.min(0) ] ],
    existencia: [ ,  [ Validators.required, Validators.min(0) ] ]
  })

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(){
    // No es la mejor practica porque requiere pasar un objeto con todos las campos validos del formulario,
    // el reset Es más flexible
    this.miFormulario.setValue({
      name:'RTX 4080ti',
      price: 1200,
      existencia: 45
    })
  }

  fieldValid(field:string){
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }


  save(){
    if(this.miFormulario.invalid) {
      // marca todo el formulario como si fuera tocado.
      this.miFormulario.markAllAsTouched()
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset()
    
  }

}
