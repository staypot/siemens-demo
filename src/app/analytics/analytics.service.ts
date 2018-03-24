import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Player } from './player.model';


@Injectable()
export class AnalyticsService {
    private currentUserSubject = new BehaviorSubject<Player>({} as Player);
    public currentUser = this.currentUserSubject.asObservable()

    constructor(private http: Http) {
   }
   
   public players = [];
   
   load(){
   
   }

    getJSON(): Observable<any> {
        return this.http.get("./assets/data/players.json").map(
            (res: Response) => res.json()
        );
    }

    public setUser(player: Player) {  

        this.currentUserSubject.next(player);
    }

}
