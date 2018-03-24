
import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'stock-chart',
  template: '<chart type="StockChart" [options]="options"></chart>',
})
export class StockComponent implements OnInit {
  options: Object;
  public players = [];
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
                    
                    this.loadChart(this.mapSeries(userData), userData);
                }
            }
        );
  }

  loadChart(series, user: Player){
    this.options = {
        chart: {
            type : 'StockChart',
            backgroundColor : "#fff",
            style: {
                fontFamily: 'Lato Light',
                color: "#fff"
            }
        },

        
        title: {
            text: user.name + ' Earnings',
            style: {
                // color: '#fff',
             }
        },

        subtitle: {
            color: '#fff',
            text: 'Player earnings from March to May',
            style: {
                // color: '#fff',
             }
        },
        xAxis: {
            label : {
                style: {
                    color: '#fff',
                 }
            }
        },
        rangeSelector: {
            selected: 1,
            inputEnabled: false,
            buttonTheme: {
                // visibility: 'hidden'
            },
            labelStyle: {
                // visibility: 'hidden'
            }
        },

        series: [{
            name: 'Player Earnings',
            data: series,
            type: 'line',
            color: '#41aaaa',
            threshold: null,
            tooltip: {
                valueDecimals: 2,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>S${point.y:,.0f}</b><br/>'
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
    };

    
  }
  mapSeries(data: Player){
    var series = [];
    var values = Object.values(data.stock_earnings);
    for(var i = 0 ; i < values.length ; i++){
        series[i] = values[i];
    }
    return series;     
  }
}
