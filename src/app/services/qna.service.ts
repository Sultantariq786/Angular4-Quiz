import { QuestionAndAnswer } from './../models/qna.model';

export class QuestionAndAnswerService {
    public questionAndAnswer: QuestionAndAnswer[] = [
      new QuestionAndAnswer('Angular4 is written in?', 'Javascript', 'Python', 'Typescript', 'ECMAScript', 'Gets compiled', 'Typescript'),
      new QuestionAndAnswer('What is Directive', 'Instruction to DOM', 'Variable', 'Object', 'Service', 'Used for Interactions',
                   'Instruction to DOM'),
      new QuestionAndAnswer('Typescript is a ...', 'Javascript', 'Superset of JS', 'Name of Angular4', 'ECMAScript',
                   'NonCompiled Code', 'Superset of JS'),
      new QuestionAndAnswer('What is Component', 'Name of Directive', 'Name of ECMA Script', 'Typescript Method', 'Directive with template',
                   'Directive', 'Directive with template'),
      new QuestionAndAnswer('First file to initialise the Angular app is ...', 'index.html', 'main.ts', 'app.module.ts',
                   'app.component.html', 'Its not index.html', 'main.ts'),
      new QuestionAndAnswer('Can a CSS be limited to a single component?', 'Yes', 'No', 'Sometimes', 'Its always limited',
                   'Can be changed', 'Yes'),
      new QuestionAndAnswer('Which element acts as a holder for routing pages?', 'Directives', 'ngRouter', 'routerModule', 'router-outlet',
                   'Not a routerModule', 'router-outlet'),
      new QuestionAndAnswer('Form used in Angular are ...', 'Bootstrap Form', 'Angular Form', 'Template Driven & Reactive Form',
                   'Java Forms', 'Nothing like Java Form', 'Template Driven & Reactive Form'),
      new QuestionAndAnswer('New variable declarations in Typescript is ...', 'var', 'let', 'const', 'Both B & C', 'Var is the old one',
                   'Both B & C'),
      new QuestionAndAnswer('AngularJS and Angular 2 are similar?', 'True', 'False', 'Angular 2 is just version upgrade', 'Both A & C',
                   'Its Re Written', 'False'),
      new QuestionAndAnswer('Angular4 is backward compatible to Angular2?', 'True', 'False', 'Conditional',
                   'Its backward compatible to AngularJS', 'There is nothing conditional', 'True'),
      new QuestionAndAnswer('Which of the following is the correct way to apply a filter?', 'Property-value || filter',
                   'Property-value && filter', 'Property-value | filter', 'None of the above', 'Filter are applied using pipe character',
                   'Property-value | filter'),
      new QuestionAndAnswer('Which of the following filter is used to convert an input string to percentage format?', 'percentage',
                   'percent', 'Both of the above', 'None of the above', 'Its in the question itself :)', 'percent'),
      new QuestionAndAnswer('Which of the following is correct about Services?',
                   'Angular 4 Services are a set of code that can be shared by different components of an application',
                   'Angular 4 Services cannot be used across multiple applications',
                   'Angular 4 Services help to build the applications into many modules', 'All of the above',
                   'Services are a set of code that can be shared by different components of an application',
                   'Angular 4 Services are a set of code that can be shared by different components of an application'),
      new QuestionAndAnswer('Which of the following is true?', 'Angular 4 Services can be used to add more data to an Angular JS class',
                   'Angular 4 Metadata can be used to add more data to an Angular JS class',
                   'Angular 4 Components can be used to add more data to an Angular JS class', 'None of the above',
                   'Angular 4 Metadata can be used to add more data to an Angular JS class',
                   'Angular 4 Metadata can be used to add more data to an Angular JS class'),
    ];

    // getQuestionAndAnswer() {
    //     return this.questionAndAnswer;  // if using private at the top then to make it access from outside.
    // }

    // getQuestionAndAnswer() {
    //     return this.questionAndAnswer.slice();  // if using private at the top then to make it access from outside and
                                                   // making a copy of array so original array stays as it was.
    // }
}
