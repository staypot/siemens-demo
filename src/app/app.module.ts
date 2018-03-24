import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders , NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HeaderComponent } from './layout/header.component';
import { AnalyticsModule } from './analytics/analytics.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { AnalyticsService } from './analytics/analytics.service';
const Routing: ModuleWithProviders = RouterModule.forRoot([]);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    Routing,HttpClientModule, HttpModule,FormsModule, FormsModule,
    AnalyticsModule
  ],
  providers: [
     AnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
