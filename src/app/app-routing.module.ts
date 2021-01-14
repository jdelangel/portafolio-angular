import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";

const app_routes: Routes =[
    {path:'home',component: PortafolioComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},

    //any other route no tlisted is going to redirect to the path indicate
    {path:'**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(app_routes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]
})

//export: indicates that the class could be used from a external file
//always use this reserved word, if you are plannig expose the module
export class AppRoutingModule {

}