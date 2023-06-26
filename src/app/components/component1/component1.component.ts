import { Component } from '@angular/core';

import { ToDOServicesService } from 'src/app/services/to-do-services.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component {
  taskName: string;
  taskArr: string[];
  constructor(private banana: ToDOServicesService) {
    this.taskName = '';
    this.taskArr = [];
  }
  addAnewTask(): void {    
    this.taskArr.push(this.taskName);
    this.banana.updateTaskArr(this.taskArr)
    this.taskName = ""
  }
}
