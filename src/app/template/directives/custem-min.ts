


import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({ 
    selector: '[customMin][ngModel]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting: CustonMinDirective,
        multi:true
    }]

})

export class CustonMinDirective implements Validator{
    @Input() minimo!:number;
    constructor() {
        console.log(this.minimo);
    }

    validate(control:FormControl){
        const inputValid = control.value;        
        return (inputValid < this.minimo)
        ? {'customMin':true}
        : null
    }
}