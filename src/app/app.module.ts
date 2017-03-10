import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage }       from '@ionic/storage';               // page 141
import { MyApp }         from './app.component';
import { HomePage }      from '../pages/home/home';
import { IntroPage }     from '../pages/intro/intro';         // page 141
import { ChecklistPage } from '../pages/checklist/checklist'; // page 141
import { Data }          from '../providers/data';            // page 141

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    ChecklistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    ChecklistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data]
})
export class AppModule {}
