import { Component } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  
  // Sample data for the line chart
  public lineChartData: any[] = [
    {
      name: 'Series 1',
      series: [
        { name: '1 Oct', value: 50 },
        { name: '2 Oct', value: 75 },
        { name: '3 Oct', value: 60 },
        { name: '4 Oct', value: 40 },
        { name: '5 Oct', value: 10 },
        { name: '6 Oct', value: 30 }
        // Add more data points as needed
      ]
    }
  ];

  // Customize chart options if needed
  public lineChartOptions: any = {
    xAxis: true,
    yAxis: true,
    // legend: true
  };
}














