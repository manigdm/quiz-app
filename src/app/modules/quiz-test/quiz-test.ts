import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { QuizService } from '../../services/QuizService';

@Component({
  selector: 'quiz-manage',
  templateUrl: './quiz-test.html',
  styleUrls: ['./quiz-test.css'],
  providers: []
})

export class QuizComponent implements OnInit {
    private quizDetailsSub:any;
    answers:any;
    quizDetails:any;
    errorMsg:string;
    successMsg:string;
    loader:boolean;
    constructor(public quizService: QuizService) {
        this.getQuizQuestion();
    }

    ngOnInit() {

    }
    getQuizQuestion(){
        this.loader = true;
        this.quizDetailsSub = this.quizService.getQuizQuestion().subscribe(response =>{
            this.quizDetails = response;
            this.loader = false;
        },
        error=>{
            this.loader = false;
            this.errorMsg = error;
        });
    }
 	ngOnDestroy() {
        if (this.quizDetailsSub != undefined) {
            this.quizDetailsSub.unsubscribe();
        }
 	}
}
