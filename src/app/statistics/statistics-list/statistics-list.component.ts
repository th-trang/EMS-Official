import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js/auto'
import { ServerService } from '../../shared/server.service';
import { TranslateService } from '@ngx-translate/core';
Chart.register(...registerables)

@Component({
selector: 'app-statistics-list',
templateUrl: './statistics-list.component.html',
styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {
  chart:any;
  
  constructor(private data: ServerService,
    private translate: TranslateService) {
      translate.setDefaultLang('vi');
      translate.use('vi');
    }


  ngOnInit(): void {
    this.data.dailyUpdate().subscribe(res=> {
      let value = res.map((res:any) => res.realtimeValue)
      let date = res.map((res:any) => res.dt)

      let allDates: string[] = []
      date.forEach((res: any) => {
        let jsdate = new Date(res * 1000)
        allDates.push(jsdate.toLocaleDateString('en', {year: 'numeric', month: 'short', day: 'numeric'}))
      });

      //create chart
      this.chart = new Chart("linechart", {
        type: 'line',
        data: {
          labels: allDates,
          datasets: [{
            label: 'Value',
            data: value,
            borderWidth: 1
          }]},
      });
    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
}
}


  




    

