import { Component, OnInit } from '@angular/core';
import { QuestionAndAnswerService } from '../services/qna.service';

@Component({
  selector: 'app-blackboard',
  templateUrl: './blackboard.component.html',
  styleUrls: ['./blackboard.component.css'],
  providers: [QuestionAndAnswerService]
})
export class BlackboardComponent implements OnInit {
  public i = 0;
  public question;
  public ans1;
  public ans2;
  public ans3;
  public ans4;
  public hint;
  public cans;
  public hidden = false;
  public revealHint = false;
  public stopQuiz = false;
  public score = 0;
  public questionNo = 1;
  public resetForm = null;
  public selectedOption = '';
  public mins = 14;
  public secs = 59;

  constructor(private qna: QuestionAndAnswerService) { }

  ngOnInit() {
    this.question = this.qna.questionAndAnswer[this.i].quest;
    this.ans1 = this.qna.questionAndAnswer[this.i].ans1;
    this.ans2 = this.qna.questionAndAnswer[this.i].ans2;
    this.ans3 = this.qna.questionAndAnswer[this.i].ans3;
    this.ans4 = this.qna.questionAndAnswer[this.i].ans4;
    this.hint = this.qna.questionAndAnswer[this.i].hint;
    this.cans = this.qna.questionAndAnswer[this.i].cans;
    // console.log(this.question);
  }

  startQuiz() {
    this.hidden = !this.hidden;
    this.onTimer();
  }

  showHint() {
    this.revealHint = !this.revealHint;
    this.score = this.score - 50;
  }

  next() {
    if (this.i > 14) {
      this.stopQuiz = true;
      // this.hidden = true;
      // console.log(this.question);
    } else {
      this.i++;
      this.question = this.qna.questionAndAnswer[this.i].quest;
      this.ans1 = this.qna.questionAndAnswer[this.i].ans1;
      this.ans2 = this.qna.questionAndAnswer[this.i].ans2;
      this.ans3 = this.qna.questionAndAnswer[this.i].ans3;
      this.ans4 = this.qna.questionAndAnswer[this.i].ans4;
      this.hint = this.qna.questionAndAnswer[this.i].hint;
      this.cans = this.qna.questionAndAnswer[this.i].cans;
      this.revealHint = false;
      this.questionNo = this.i + 1;
    }
  }

  onOptionSelection(event: any) {
    this.selectedOption = event.target.value;
    if (this.selectedOption === this.cans) {
      // console.log(this.selectedOption);
      // console.log(this.cans);
      this.score = this.score + 100;
    } else {
      this.score = this.score - 100;
    }
    this.resetForm = null;
    this.next();
  }

  // countdownStart() {
  //   setInterval((this.mins = this.mins - 1), 1000);
  // }

  onTimer() {
    setInterval (() => {
      this.secs--;
      if (this.secs === 0) {
        this.secs = 59;
        this.mins--;
      }
    }, 1000);
  }

  // offTimer() {
  //   var endTimer = setTimeout(onTimer, 1000);
  // }


}
