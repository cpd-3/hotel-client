import { Component } from '@angular/core';
import {MainHeader} from './inner-items/main-header/main-header';

@Component({
  selector: 'app-home-page',
  imports: [
    MainHeader
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
