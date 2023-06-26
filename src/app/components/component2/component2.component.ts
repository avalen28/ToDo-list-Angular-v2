import { Component } from '@angular/core';
import { ToDOServicesService } from 'src/app/services/to-do-services.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

taskArrToPrint: string[]
  constructor(private banana: ToDOServicesService) {
    this.taskArrToPrint = []

    this.banana.getAllTask().subscribe(taskArr => {
      this.taskArrToPrint = taskArr;
    })
  }
  
}
