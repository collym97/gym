import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  not = 'https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
