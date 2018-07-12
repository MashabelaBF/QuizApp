import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EducationPage } from '../pages/education/education';
import { GeographyPage } from '../pages/geography/geography';
import { SciencePage } from '../pages/science/science';
import { MathsPage } from '../pages/maths/maths';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EducationPage,
    GeographyPage,
    SciencePage,
    MathsPage,
    HistoryPage,
    ResultsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EducationPage,
    GeographyPage,
    SciencePage,
    MathsPage,
    HistoryPage,
    ResultsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
