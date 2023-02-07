import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  template: '',
})
export class MainPageComponent {

  constructor(router: Router) {
    router.navigate(['/orders']);
}

}
