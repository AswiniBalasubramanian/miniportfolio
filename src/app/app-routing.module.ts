import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ShowyoursComponent } from './showyours/showyours.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {path:'',component:HomeComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'showyours',component:ShowyoursComponent},
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
