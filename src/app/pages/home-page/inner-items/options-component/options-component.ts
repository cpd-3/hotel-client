import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-options-component',
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatIcon
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss'
})
export class OptionsComponent {

}
