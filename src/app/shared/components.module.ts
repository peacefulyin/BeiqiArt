import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubBrandComponent} from "../components/sub-brand/sub-brand.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SubBrandComponent
  ],
  exports: [
    CommonModule,
    SubBrandComponent
  ]
})

export class ComponentsModule {}



