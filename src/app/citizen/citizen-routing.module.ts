import { NewRequestSelectionComponent } from './new-request-selection/new-request-selection.component';
import { RequestTimelineComponent } from './request-timeline/request-timeline.component';
import { ArchiveComponent } from './archive/archive.component';
import { CitizenPage2Component } from './citizen-page-2/citizen-page-2.component';
import { HomeComponent } from './home/home.component';
import { CitizenComponent } from './citizen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestDetailsComponent } from './new-request-details/new-request-details.component';
import { NewRequestFormComponent } from './new-request-form/new-request-form.component';


const routes: Routes = [
  {
    path: '',
    component: CitizenComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'page2',
        component: CitizenPage2Component,
      },
      {
        path: 'archive',
        component: ArchiveComponent,
      },
      {
        path: 'request-timeline',
        component: RequestTimelineComponent,
      },
      {
        path: 'new-request-selection',
        component: NewRequestSelectionComponent,
      },
      {
        path: 'new-request-details',
        component: NewRequestDetailsComponent,
      },
      {
        path: 'new-request-form',
        component: NewRequestFormComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }