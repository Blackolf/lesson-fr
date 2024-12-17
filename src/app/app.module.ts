import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExosComponent } from './exos/exos.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StudenInfoComponent } from './studen-info/studen-info.component';
import { StudenControlePageComponent } from './studen-controle-page/studen-controle-page.component';

// import { VocaModule as Vocabularie } from '../custome_modules/voca/voca.module';
// import { VocaListModule as Vocabularie_List} from '../custome_modules/voca-list/voca-list.module';
// import { Voca as VocaInterface} from '../custome_modules/voca'


@NgModule({
  declarations: [
    AppComponent,
    ExosComponent,
    SignInComponent,
    StudenInfoComponent,
    StudenControlePageComponent,
    // Vocabularie,
    // Vocabularie_List,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
