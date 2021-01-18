import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { ServerComponent } from './Server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { KrishnaTaskComponent } from './krishna-task/krishna-task.component';
import { AnagramTaskComponent } from './anagram-task/anagram-task.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'warning',
    component: WarningAlertComponent
  },
  {
    path: 'success',
    component: SuccessAlertComponent
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'anagram',
    component: AnagramTaskComponent
  },
  {
    path: 'task',
    component: KrishnaTaskComponent
  },
  {
    path: 'questionPaper',
    component: QuestionPaperComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
