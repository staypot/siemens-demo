import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../analytics/analytics.service';
import { Player } from '../analytics/player.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentUser : Player
  constructor(
    private analyticsServcie: AnalyticsService
  ) { }

  ngOnInit() {
    this.analyticsServcie.currentUser.subscribe(
      (userData: Player) => {
        this.currentUser = userData;
      });
  }

  
}
