import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/services/base.service';
import { onExit } from 'src/app/guards/exit.guard';
import { JsonPipe } from '@angular/common';
import { json } from 'express';
import { reload } from '@angular/fire/auth';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit, onExit {
  
  crud: FormGroup;

  constructor(private BaseService: BaseService) {  this.crud = new FormGroup({
    firstname: new FormControl('', Validators.required),
    Gmail: new FormControl('',Validators.required),
    fecha: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    plan: new FormControl('', Validators.required)

  })
  }
  
  async ondSumbit() {
    console.log(this.crud.value)
    const response = await this.BaseService.addform(this.crud.value)
    alert('Nuevo cliente agregado'); location.reload();
    
    console.log(response)
  }

  ngOnInit(): void {
   
  }

  onExit() {
    if (this.crud.dirty) {
      const rta = confirm('Estas seguro de salir sin guardar?');
      return rta
    }
    return true
    
    }


}
