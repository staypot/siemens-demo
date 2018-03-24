import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AnalyticsComponent } from './analytics.component';

import {CommonModule} from '@angular/common';
import { ChartModule} from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import * as HighStock from 'highcharts/highstock';
import * as MoreChart from 'highcharts/highstock';
import { AnalyticsService } from './analytics.service';
import { SpiderWebComponent } from './charts/spiderweb.component';
import { CircleComponent } from './charts/circle.component';
import { BarComponent } from './charts/bar.component';
import { StockComponent } from './charts/stock.component';
import { AreaComponent } from './charts/area.component';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const analyticsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AnalyticsComponent
  }
]);
declare var require: any
export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/highcharts-more');
  dd(hc);
  return hc;
  }




@NgModule({
  imports: [
    analyticsRouting,
    ChartModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    FilterPipe,    
    AnalyticsComponent,
    SpiderWebComponent,
    CircleComponent,
    BarComponent,
    StockComponent,
    AreaComponent,
  ],
  providers: [
    AnalyticsService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ]
})
export class AnalyticsModule {}
