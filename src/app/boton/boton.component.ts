import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor(private router: Router,  private fireauth: AuthService) { }

  ngOnInit(): void {
  }

     onClick() {
   this.fireauth.logauth()
     .then(() => this.router.navigate(['/login']))
     .catch(error => { console.log(error) })
     
      
      
      
 }

}



