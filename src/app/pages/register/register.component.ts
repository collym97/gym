import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onExit } from 'src/app/guards/exit.guard';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,onExit {
img = '/assets/logo.gif';
 register: FormGroup;

  constructor(private fireauth: AuthService, private router: Router)  {
    this.register = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required ])
    
  })
    
   }

  ngOnInit(): void {
  }

  Enviar(form: any) {
    this.fireauth.register(this.register.value)
    alert("Registro exitoso")
    this.router.navigate(['/login'])

      
    
  }

  log() {
  this.router.navigate(['/login'])
}

onExit() {
    if (this.register.dirty) {
      const rta = confirm('No pordas acceder sin iniciar sesion');
     this.register.touched
     return rta
    }
    return true

    }
 
}
