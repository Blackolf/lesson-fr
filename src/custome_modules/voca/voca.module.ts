import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { voca as VocaInterface} from '../custome_modules/voca'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


export class VocaModule { 
  public Fr : string | undefined; 
  public Ang : string | undefined; 
  public zh_CN : string | undefined; 
  public zh_tw : string | undefined; 

  public testVoca(){
    this.Fr = 'test fr';
    this.Ang = 'test en';
    this.zh_CN = 'test cn';
    this.zh_tw = 'test tw';
  }
}


