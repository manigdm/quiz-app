import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './BaseService';
import { API_CONFIG } from '../core/Config';
import { Subject }    from 'rxjs/Subject';
import { environment }    from '../../environments/environment';

@Injectable()
export class QuizService {
	quizResult:any;
	selectedOption:any;
    constructor(private baseService: BaseService) {

    }
    getQuizQuestion(): Observable<any> {
        let url = API_CONFIG.GET_QUIZ_QUESTIONS;
        return this.baseService.get(url);
    }
    getQuizResult(quizResult, selectedOption){
    	this.quizResult = quizResult;
    	this.selectedOption = selectedOption;
    }

}
