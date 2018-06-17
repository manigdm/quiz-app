import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/QuizService';

@Component({
  selector: 'quiz-result',
  templateUrl: './quiz-result.html',
  styleUrls: ['./quiz-result.css'],
  providers: []
})

export class QuizResultComponent implements OnInit {
    quizDetails:any;
    constructor(public quizService: QuizService) {

    }
    ngOnInit() {
    	this.quizDetails = this.quizService.quizResult;
    }
}
