import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnDestroy {

  title: string = 'Ecological purposes';
  intervalTest: any;

  @Input() results: any[] =
    [
      {
        "name": "Plant trees",
        "value": 20
      },
      {
        "name": "Reduce plastic industry",
        "value": 35
      },
      {
        "name": "Change to renovable energy",
        "value": 50
      },
      {
        "name": "participate in pressuring governments and business to reduce the growth of society",
        "value": 10
      }
    ];

  OptionsName: string = 'Options'

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = this.OptionsName;
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'forest';

  constructor() {
    //this.testChart();
  }

  ngOnDestroy(): void {
    if (this.intervalTest) {
      clearInterval(this.intervalTest)
    }
  }

  onSelect(event: any) {
    console.log(event);
  }

  testChart() {
    this.intervalTest = setInterval(() => {
      const newResults = [...this.results];
      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1000);
  }

}
