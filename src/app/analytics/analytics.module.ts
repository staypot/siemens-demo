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
import { FilterPipe } from '../shared/filter.pipe';

import { FormsModule } from '@angular/forms';
const analyticsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AnalyticsComponent
  }
]);




@NgModule({
  imports: [
    analyticsRouting,
    // ChartModule.forRoot(
    //     HighStock ),
    CommonModule,
    FormsModule
  ],
  declarations: [
    AnalyticsComponent,
    SpiderWebComponent,
    CircleComponent,
    BarComponent,
    StockComponent,
    FilterPipe,
    AreaComponent
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsModule {}
