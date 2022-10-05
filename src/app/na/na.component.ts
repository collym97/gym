import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-na',
  templateUrl: './na.component.html',
  styleUrls: ['./na.component.css'],
   animations: [

  ]
})
export class NaComponent implements OnInit {
    img = 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'
    
 
  
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }
  

  

  


}
