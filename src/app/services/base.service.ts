import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc, collectionData,doc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Model } from '../interfaces/model';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private Firestore: Firestore) { }
  reporte(Model: Model) {
    const modelRef = collection(this.Firestore, 'model')
    return collectionData
  }
  addform(Model: Model) {
    const modelRef = collection(this.Firestore, 'model')
    return addDoc(modelRef, Model)
  }

  getform(): Observable<Model[]>{
    const modelRef = collection(this.Firestore, 'model');
    return collectionData(modelRef,{idField: 'id'}) as Observable<Model[]>;
     
  }

  delete(model: Model) {
    const modelRef = doc(this.Firestore, `model/${model.id}`);
    return deleteDoc(modelRef)
    
  }
}
