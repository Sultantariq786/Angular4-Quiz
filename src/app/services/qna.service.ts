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
      new QuestionAndAnswer('Form used in Angular are ...', 'Bootstrap Form', 'Angular Form', 'Template Driven &amp; Reactive Form',
                   'Java Forms', 'Nothing like Java Form', 'Template Driven &amp; Reactive Form')
    ];
}
