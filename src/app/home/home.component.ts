import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 

  abuseOptions = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'تعداد تخلف',
        type: 'bar',
        barWidth: '60%',
        data: [15, 22, 11, 14, 4, 43, 61],
      },
    ],
  };



  chartOption2: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [102, 88, 94, 80, 75, 99, 86],
        type: 'line',
      },
    ],
  };


  theme: string;
  options = {
    title: {
      text: 'نوع سفرها',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['سفرهای داخلی', 'سفرهای خارجی']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 67, name: 'سفرهای داخلی' },
          { value: 33, name: 'سفرهای خارجی' },
           
        ]
      }
    ]
  };

  ngOnInit(): void {
 
  }

 
  constructor() {
 
  }

}
