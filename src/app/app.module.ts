import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BaseService } from './services/BaseService';
import { QuizService } from './services/QuizService';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { QuizComponent } from './modules/quiz-test/quiz-test';
import { QuizResultComponent } from './modules/quiz-result/quiz-result';
import { QuizFormQuetionComponent } from './modules/quiz-question-form/quiz-question-form';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizResultComponent,
    QuizFormQuetionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    CoreModule,
    NgSelectModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    BaseService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
