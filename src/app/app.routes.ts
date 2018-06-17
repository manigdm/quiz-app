import { Routes } from '@angular/router';
import { QuizComponent } from './modules/quiz-test/quiz-test';
import { QuizResultComponent } from './modules/quiz-result/quiz-result';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'quiz/test', pathMatch: "full" },
  { path: 'quiz/test', component: QuizComponent },
  { path: 'quiz/result', component: QuizResultComponent }
];