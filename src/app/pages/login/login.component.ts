import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
    
})
export class LoginComponent implements OnInit {
  img = '/assets/logo.gif';
  login: FormGroup;

  constructor(private fireauth: AuthService, private router: Router)  {
    this.login = new FormGroup({
    correo: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    
  })
    
   }

  ngOnInit(): void {
    setTimeout(() => {
        this.router.navigate(['/login']);
    }, 5000);  //5s
  }

  Enviar(form: any) {
    this.fireauth.login(this.login.value)
      .then(res => {
        console.log(res);
        this.router.navigate(['/home'])})
      .catch(error => console.log(error));
    
      
    
  }
  onClick() {
    this.fireauth.loginwithgoogle()
      .then(res => {
        console.log(res);
      this.router.navigate(['/home'])
      })
  
  }


}
