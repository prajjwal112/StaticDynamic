import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiWindowService } from 'ngx-multi-window';
import { loadContact, loadGame } from '../state/app.actions';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly store: Store<AppState>, private multiWindowService: MultiWindowService) { }

  ngOnInit(): void {
  }

  navigateToContact(){
    this.store.dispatch(loadContact());
    window.open('/contact', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  navigateToGame(){
    this.store.dispatch(loadGame());
    window.open('/game', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
  }

  openInSame(){
    this.store.dispatch(loadGame());
  }

}
