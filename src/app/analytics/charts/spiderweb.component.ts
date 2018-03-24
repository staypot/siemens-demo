import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'spiderweb-chart',
  template: '<chart [options]="options"></chart>',
})
export class SpiderWebComponent implements OnInit {
  options: Object;
  public players = [];
  max : number;
  
  public currentUser : Player
  constructor(
    private analyticsServcie: AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsServcie.currentUser
        .subscribe(
            (userData: Player) => {
                this.currentUser = userData;
                
                if (userData.stats){
                    this.loadChart(userData);
                }
            }
        );
  }

  loadChart(data: Player){
    this.options = {
        chart : {
            polar: true,
            type: 'line',
            minPadding:0,
            maxPadding:0,
            width:350,
            height: 200,
        },
      pane: { size: '70%'},
      title:{ text: '' },
      xAxis: {
          categories: Object.keys(data.stats),
          tickmarkPlacement: 'on',
          lineWidth: 0
      },
  
      yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0,
          max:100
      },
  
      tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
      },
  
  
      series: [{
         type: 'area',
          name: 'Stats Value',
          color: '#41aaaa',
          data: Object.values(data.stats),
          pointPlacement: 'on'
      }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 320
            },
            chartOptions: {
                chart:{
                    width: 320,
                    type: 'line'
                },
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
    };
  }
}
