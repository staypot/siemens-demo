
import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'area-chart',
  template: '<chart [options]="options"></chart>',
})
export class AreaComponent implements OnInit {
  options: Object;
  public players = [];
  max : number;
  currentUser : Player

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
  
  loadChart(userData: Player){
   this.options = {
        chart: {
            defaultSeriesType: 'areaspline'
        },
        title:{ text: ''},
        xAxis: {
            minPadding: 0,
            maxPadding: 0,
            categories: Object.keys(userData.stats),
        },
        yAxis :{ max: 100 },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        series: [{
            name: 'Stats Value',
            color: '#41aaaa',
            data: Object.values(userData.stats),
            marker: {
                enabled: false
            }
        }]
    };
    }
}
