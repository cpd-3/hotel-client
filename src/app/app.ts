import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer-component/footer-component';
import {MainHeader} from './pages/home-page/inner-items/main-header/main-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MainHeader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hotel-client');
}
