import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NaComponent } from './na/na.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './pages/register/register.component';
import { LoaderComponent } from './loader/loader.component';
import {MatTableModule} from '@angular/material/table';
import { AnimationComponent } from './animation/animation.component';
import { CrudComponent } from './pages/crud/crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BotonComponent } from './boton/boton.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SplashComponent } from './splash/splash.component';
import { NotfoundComponent } from './notfound/notfound.component';

 

@NgModule({
  declarations: [
    AppComponent,
    NaComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoaderComponent,
    AnimationComponent,
    CrudComponent,
    BotonComponent,
    ReporteComponent,
    SplashComponent,
    NotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatTableModule,
    Ng2SearchPipeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
    
 
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
