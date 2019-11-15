import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IconDetailsComponent } from './icon-details/icon-details.component';
import { AboutComponent } from './about/about.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/fontawesome'},
  {path:'fontawesome',component:MainComponent},
  {path:'material-icons',component:MaterialIconsComponent},
  {path:'about',component:AboutComponent},
  {path:'details',component:IconDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true,
    scrollPositionRestoration:'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
