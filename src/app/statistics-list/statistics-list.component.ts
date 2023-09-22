import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'
import { ServerService } from '../shared/server.service';
import { TranslateService } from '@ngx-translate/core';
import { io, Socket } from 'socket.io-client';
import { Filters } from './filters.util';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {
  private chart: any;
  private socket!: Socket;
  private dataSource: any;
  currentDay!: string;
  details!: any;
  displayColumns: string[] = ['timestamp','tag','name','realtimeValue','upperbound','lowerbound']
  @ViewChild('realtimeChart') chartCanvas!: ElementRef;

  constructor(private srv: ServerService,
    private translate: TranslateService) {
      this.currentDay = Filters.getDay(new Date().toString());
    translate.setDefaultLang('vi');
    translate.use('vi');
  }

  ngOnInit(): void {
    this.getChartData()
    this.connectWebSocket()
  }

  getChartData() {
    this.srv.getStat().subscribe({
      next: (res) => {
        this.dataSource = res;
        this.initializeChart();
      }
    })
  }

  connectWebSocket() {
    this.socket = io('http://localhost:3000');
    this.socket.on('stat', (historiesResults: any) => {
      this.updateChart(historiesResults);
      console.log('Received historiesResults!');
    });
  }

  initializeChart(): void {
    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Flue gas O2', // tag name
          data: '', // realtimeValue
          fill: false,
          borderColor: 'red',
          borderWidth: 0.8,
          showLine: false,
          tension: 0
        },
        {
          label: 'Flue gas CO',
          data: '',
          fill: false,
          borderColor: 'black',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        },
        {
          label: 'Flue gas NOx',
          data: '',
          fill: false,
          borderColor: 'blue',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        },
        {
          label: 'Flue gas SO2',
          data: '',
          fill: false,
          borderColor: 'purple',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        },
        {
          label: 'Flue gas HCl',
          data: '',
          fill: false,
          borderColor: 'aliceblue',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        },
        {
          label: 'Flue gas H2O',
          data: '',
          fill: false,
          borderColor: 'gray',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'FT TEMP',
          data: '',
          fill: false,
          borderColor: 'green',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'FT PRESSURE',
          data: '',
          fill: false,
          borderColor: 'violet',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'FT DUST',
          data: '',
          fill: false,
          borderColor: 'yellow',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'FT FLOW',
          data: '',
          fill: false,
          borderColor: 'orange',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'Furnance TT0301',
          data: '',
          fill: false,
          borderColor: 'black',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }
          , {
          label: 'Furnance TT0302',
          data: '',
          fill: false,
          borderColor: 'tomato',
          borderWidth: 0.8,
          showLine: true,
          tension: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to adjust both width and height
        aspectRatio: 0.2 // You can adjust this value to control the aspect ratio of the chart
      }
    });
  }

  ngAfterViewInit(): void {
    //chart lines toggle
    this.chartCanvas.nativeElement.addEventListener('click', (event: any) => {
      const activePoints = this.chart.getActiveElements(event);

      if (activePoints.length > 0) {
        const datasetIndex = activePoints[0].datasetIndex;
        const dataset = this.chart.data.datasets[datasetIndex];
        dataset.showLine = !dataset.showLine; // Toggle visibility
        this.chart.update(); // Update the chart
      }
    });
  }

  updateChart(historiesResults: any): void {
    const datasetKeys = [
      'gas_o2', 'gas_co', 'gas_nox', 'gas_so2', 'gas_hcl', 'gas_h2o', 'stack_temp', 'stack_pressure',
      'stack_dust', 'stack_flow', 'temp_furnance301', 'temp_furnance302'
    ]
    const datasetData: { [key: string]: any } = {};
    datasetKeys.forEach(key => {
      datasetData[key] = [];
    })

    const timestampValues = [];

    for (const row of historiesResults) {
      timestampValues.push(new Date(row.timestamp).toLocaleTimeString());
      datasetKeys.forEach(key => {
        datasetData[key].push(parseFloat(row[key]))
      })
    }

    if (timestampValues.length > 25) {
      timestampValues.shift();
      datasetKeys.forEach(key => {
        datasetData[key].shift();
      });
    }

    datasetKeys.forEach((key, index) => {
      this.chart.data.datasets[index].data = datasetData[key];
    });
    this.chart.data.labels = timestampValues.slice(-24);

    this.chart.update();
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
