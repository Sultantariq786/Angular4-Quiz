import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { QuestionAndAnswerService } from '../app/services/qna.service';

import { AppComponent } from './app.component';
import { BlackboardComponent } from './blackboard/blackboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
