import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  img = 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'
  constructor() { }

  ngOnInit(): void {
  }

}
