import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const ROUTES:Routes = [
    {
        path:'template',
        loadChildren: () => import('./template/template.module').then( m => m.TemplateModule)
    },

    {
        path:'reactive',
        loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule)
    },
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
    },

    {
        path:'**', redirectTo:'template'
    }
]


@NgModule({
    imports:[ RouterModule.forRoot(ROUTES) ],
    exports:[RouterModule]
})

export class AppRouting{}