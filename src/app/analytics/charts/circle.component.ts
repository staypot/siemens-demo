// import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from '../analytics.service';
// import { Player } from '../player.model';

// @Component({
//   selector: 'circle-chart',
//   template: '<chart [options]="options"></chart>',
// })
// export class CircleComponent implements OnInit {
//   options: Object;
//   public players = [];
//   currentUser : Player

//   constructor(
//     private analyticsServcie: AnalyticsService
//   ) { }

//   ngOnInit() {
//     this.analyticsServcie.currentUser
//         .subscribe(
//             (userData: Player) => {
//                 this.currentUser = userData;
                
//                 if (userData.stats){
                    
//                     this.loadChart(this.mapSeries(userData));
//                 }
//             }
//         );
//   }
  
//   loadChart(series){
//     this.options = {
//         chart: {
//           type: 'pie',
//           minPadding:0,
//           maxPadding:0,   
//           width:350,
//           height: 200
//         },
//         title: {
//           floating: true,
//           text : ''
//         },
//         plotOptions: {
//           pie: {
//             innerSize: '50%'
//           }
//         },
    
//         series: [{
//           data: series
//         }]
//     };
//   }

//   mapSeries(data: Player){
//       var series = [];
//       var keys = Object.keys(data.stats);
//       var values = Object.values(data.stats);
//       for(var i = 0 ; i < values.length ; i++ ){
//             var item = [];
//             item.push(keys[i]);
//             item.push(values[i]);
//             series.push(item)
//       }
//       return series;
//   }
// }
