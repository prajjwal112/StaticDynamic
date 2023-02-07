import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGame } from '../state/app.selector';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game$!: Observable<string>;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.game$ = this.store.select(selectGame)
  }

}
