import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToDOServicesService {
taskArr = new Subject <string[]>()
  constructor() {
   
  }
  updateTaskArr(taskArr: string[]) {
    this.taskArr.next(taskArr)
  }

  getAllTask(): Observable<string[]>{
    return this.taskArr.asObservable()
  }
}
