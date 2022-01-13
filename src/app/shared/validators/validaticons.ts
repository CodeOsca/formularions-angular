import { FormControl } from "@angular/forms";

export const nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPatter:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export function NoPuedeSerStrider(control:FormControl){
    const valor:string = control.value?.trim().toLowerCase()
    if (valor==='strider') return { noStrider:true }
    else { return null; }
  }