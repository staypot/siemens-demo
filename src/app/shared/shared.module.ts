import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AnalyticsComponent } from '../analytics/analytics.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class SharedModule {}