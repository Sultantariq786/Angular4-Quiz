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
  public revealHint = false;
  public stopQuiz = false;

  constructor(private qna: QuestionAndAnswerService) { }

  ngOnInit() {
    this.question = this.qna.questionAndAnswer[this.i].quest;
    this.ans1 = this.qna.questionAndAnswer[this.i].ans1;
    this.ans2 = this.qna.questionAndAnswer[this.i].ans2;
    this.ans3 = this.qna.questionAndAnswer[this.i].ans3;
    this.ans4 = this.qna.questionAndAnswer[this.i].ans4;
    this.hint = this.qna.questionAndAnswer[this.i].hint;
    this.cans = this.qna.questionAndAnswer[this.i].quest;
    // console.log(this.question);
  }

  showHint() {
    this.revealHint = !this.revealHint;
  }

  next() {
    if (this.i > 7) {
      // this.revealHint = false;
      this.stopQuiz = true;
      // console.log(this.question);
    } else {
      this.i++;
      this.question = this.qna.questionAndAnswer[this.i].quest;
      this.ans1 = this.qna.questionAndAnswer[this.i].ans1;
      this.ans2 = this.qna.questionAndAnswer[this.i].ans2;
      this.ans3 = this.qna.questionAndAnswer[this.i].ans3;
      this.ans4 = this.qna.questionAndAnswer[this.i].ans4;
      this.hint = this.qna.questionAndAnswer[this.i].hint;
      this.cans = this.qna.questionAndAnswer[this.i].quest;
      this.revealHint = false;
    }
  }

}
