import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from './pages/register/register.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ExitGuard } from './guards/exit.guard';
import { SplashComponent } from './splash/splash.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
   
   
  },
  {
    path: 'home',
    component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/register'])),
   
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate:[ExitGuard]
    
   
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },


   {
    path: 'Registro',
     component: CrudComponent, ...canActivate(() => redirectUnauthorizedTo(['/register'])),
      canDeactivate:[ExitGuard]
  },
  {
   path: "**",
  component: NotfoundComponent  
   }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
