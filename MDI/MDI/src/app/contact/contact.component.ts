import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectContact } from '../state/app.selector';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact$!: Observable<string>;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.contact$ = this.store.select(selectContact);
  }

}
