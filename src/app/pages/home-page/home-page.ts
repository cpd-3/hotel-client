import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {OptionsComponent} from './inner-items/options-component/options-component';
import {OffersComponent} from './inner-items/offers-component/offers-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionsComponent,
    OffersComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
