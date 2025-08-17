import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';
import {OptionsComponent} from './inner-items/options-component/options-component';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader,
    OptionsComponent
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
