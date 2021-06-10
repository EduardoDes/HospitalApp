import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() titulo : string = 'Sin Titulo';
  @Input() labels : string[] = [];
  @Input() data : number[] = [];
  
 
  public doughnutChartType: ChartType = 'doughnut';

}
