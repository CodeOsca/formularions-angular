import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email.validator.service';
import { emailPatter, nombreApellidoPattern, NoPuedeSerStrider } from 'src/app/shared/validators/validaticons';
import { ValidatorService } from "../../../shared/validators/validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  miFormulario:FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
    email:['', 
              [Validators.required, 
              Validators.pattern( this.validatorService.emailPatter ) ],
              [this.emailValidatorService] ],
    username:['', [Validators.required ] ],
    password:['', [Validators.required, Validators.minLength(6) ] ],
    password2:['', [Validators.required ] ]
  }, 
  {
    validators: [ this.validatorService.camposIguales('password','password2') ]
  }
  )

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ){}

  ngOnInit(): void {
    this.miFormulario.reset({nombre:'Oscar Colina', email: 'test1@test.com', username:'My-no-saber',
  password:'1234567', password2:'1234567'})
  }

  get emailErrorMsg():string{
    const erros = this.miFormulario.get('email')?.errors
    if(erros?.required) return 'El correo es obligatorio'
    if(erros?.pattern) return 'El correo no cumple con un formato valido'
    if(erros?.emailTomado) return 'El correo ya ha sido registrado'
    return 'El correo '
  }

  fieldInvalid(field:string){
    return this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched
  }

  submit(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched()
  }

}
