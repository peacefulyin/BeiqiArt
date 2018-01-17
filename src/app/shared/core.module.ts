import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule
} from '@angular/material';


import {NgModule} from '@angular/core';



@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
})


export class CoreModule {
}


