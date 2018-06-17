import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/QuizService';

@Component({
  selector: 'quiz-question-form',
  templateUrl: './quiz-question-form.html',
  styleUrls: ['./quiz-question-form.css'],
  providers: []
})

export class QuizFormQuetionComponent implements OnInit {
    quiz:any = {};
    @Input() quizDetails;
    selectedOptions:any = {};
    quizResult:any;
    activeRouter:any
    constructor(public quizService: QuizService, private router: Router, private activeRoute: ActivatedRoute) {
    	this.quiz['answers'] = {};
    	this.selectedOptions['answers'] = {};
      this.activeRouter = this.activeRoute.snapshot.url.join('/');
    }

    ngOnInit() {
      if(this.quizService.selectedOption && this.activeRouter == 'quiz/result'){
        this.quiz['answers'] = this.quizService.selectedOption;
        this.quizResult = this.quizService.quizResult;
      }else{
        this.quizResult = false;      
      }  
    }

    onSelectedAns(selectedAns, currentObj){
    	this.selectedOptions['answers'][currentObj.id] = selectedAns.answer;
    	currentObj['correct'] = selectedAns.correct;
    }

    clearQuizData(){
      this.quiz['answers'] = {};
    }

    submitQuiz(form){
        if(form.valid){
          this.quizService.getQuizResult(this.quizDetails, this.selectedOptions['answers']);
			    this.router.navigate(['/quiz/result']);
        }
    }

}
