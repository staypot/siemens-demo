import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { Player } from './player.model';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  @ViewChild('pScroll') private myScrollContainer: ElementRef;
  
  options: Object;
  
  public players = [];
  
  public currentUser : Player;
  
  search: string
  
  constructor(
    private analyticsService : AnalyticsService,
    private elRef:ElementRef
  ){}

  ngOnInit() {
    this.analyticsService.getJSON()
      .subscribe(
        (responseData) => {
          this.players = responseData;
          //SET THE INITIAL USER
          this.analyticsService.setUser(responseData[0]);
          this.analyticsService.currentUser
              .subscribe(
                 (userData: Player) => {
                this.currentUser = userData;  
              });
        });
  }

  setUserOnClick(id: number){
    this.analyticsService.setUser(this.players[id-1]);
  }

  setUserOnSlide(id: number){
    this.analyticsService.setUser(this.players[id-1]);
    this.myScrollContainer.nativeElement.scrollTo({ top: this.elRef.nativeElement.querySelectorAll('.name-list li')[id-1].offsetTop - 120, behavior: 'smooth' });
  }

}
