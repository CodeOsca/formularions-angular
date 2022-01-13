import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  miFormulario:FormGroup = this.fb.group({
    gender: ['M', Validators.required ],
    notifications: [true, Validators.required ],
    termins:[ false, Validators.requiredTrue ]
  })

  person ={
    gender:'F',
    notifications:true
  }

  ngOnInit(){
    this.miFormulario.reset({...this.person, termins:true})
    // this.miFormulario.get('notifications')?.valueChanges.subscribe( form => console.log(form) )

    // this.miFormulario.valueChanges.subscribe( form => {
    //   delete form.termins
    //   this.person = form;
    // })

    this.miFormulario.valueChanges.subscribe( ({termins, ...rest}) => this.person = rest )
  }

  constructor(
    private fb: FormBuilder
  ){}

  save(){
    const formValue = {...this.miFormulario.value}
    delete formValue.termins
    this.person = formValue;
  }
}
