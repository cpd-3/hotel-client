import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/input';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon,
    MatFormField,
    MatLabel,
    MatDateRangeInput,
    MatHint,
    MatSuffix,
    MatDatepickerToggle,
    MatDateRangePicker
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss'
})
export class StaysFormComponent {

}
