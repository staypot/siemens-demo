// import { Component, OnInit } from '@angular/core';
// import { Player } from '../player.model';
// import { AnalyticsService } from '../analytics.service';

// @Component({
//   selector: 'column-chart',
//   template: '<chart class="ss" [options]="options"></chart>',
// })
// export class BarComponent implements OnInit {
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
                    
//                     this.loadChart(userData);
//                 }
//             }
//         );
//   }

//   loadChart(data: Player){
//     this.options = {
//         chart: {
//             type: 'column',
//             width:350,
//             height: 200,
//             minPadding:0,
//             maxPadding:0
//         },
//         title: {
//             text: ''
//         },
//         xAxis: {
//             categories: Object.keys(data.stats),
//             title: {
//                 text: null
//             }
//         },
//         yAxis: {
//             min: 0,
//             max: 100,
//             title: {
//                 align: 'high'
//             },
//             labels: {
//                 overflow: 'justify'
//             }
//         },
//         tooltip: {
//             valueSuffix: ' percent'
//         },
//         plotOptions: {
//             bar: {
//                 dataLabels: {
//                     enabled: true
//                 }
//             }
//         },
//         legend: {
//             layout: 'horizontal',
//             align: 'right',
//             verticalAlign: 'top',
//             x: -40,
//             y: 80,
//             floating: true,
//             borderWidth: 1,
//             shadow: true
//         },
//         credits: {
//             enabled: false
//         },
//         series: [{
//             name : 'Stats',
//             color: '#41aaaa',
//             data: Object.values(data.stats)
        
//         }],

//         responsive: {
//             rules: [{
//                 condition: {
//                     minWidth: 992,
//                     maxWidth: 1365
//                 },
//                 chartOptions: {
//                     chart: {
//                         width: 100
//                     },
//                     subtitle: {
//                         text: null
//                     },
//                     navigator: {
//                         enabled: false
//                     }
//                 }
//             }]
//         }
//     };
//   }
// }
