import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocaModule as Vocabularie } from '../voca/voca.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VocaListModule { 
  public List ?: Array<Vocabularie> ;
}
