import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  // also used for communicate to other component
  // communicate to 
  public notificationSubject=new BehaviorSubject<string>("Deafult Msg")

  constructor() { }

  sendNotification(data:string){
     this.notificationSubject.next(data);
  }
}
