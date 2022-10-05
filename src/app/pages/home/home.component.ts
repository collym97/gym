import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/interfaces/model';
import { BaseService } from 'src/app/services/base.service';
import { ReporteService } from 'src/app/services/reporte.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: Model[];
  search: any;


  constructor( private  imprimir: ReporteService,private Baseservice: BaseService)
  {

    this.model = [];
    
    
   }
 

  ngOnInit(): void {
      this.Baseservice.getform().subscribe(data => {
        this.model = data;
        console.log(data)
    })
  
  }
  
 async  onClickdelete(model: Model) {
   const d = await this.Baseservice.delete(model)
   console.log(d)
 }


}
