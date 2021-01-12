import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './Server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { KrishnaTaskComponent } from './krishna-task/krishna-task.component';



@NgModule({
  declarations: [AppComponent, ServerComponent, WarningAlertComponent, SuccessAlertComponent, PageNotFoundComponent, DataBindingComponent, DirectivesComponent, KrishnaTaskComponent],
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
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
        path: 'task',
        component: KrishnaTaskComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
