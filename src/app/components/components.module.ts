import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { RouteCardComponent } from './route-card/route-card.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { ClubsListSubcribedComponent } from './clubs-list-subcribed/clubs-list-subcribed';
import { ClubsListComponent } from './clubs-list/clubs-list.component';
import { ClubsDetailComponent } from './clubs-detail/clubs-detail.component';
import { PlansListComponent } from './plans-list/plans-list.component';
import { PlansDetailComponent } from './plans-detail/plans-detail';
import { MeetingPointDetailComponent } from './meetingPoint-detail/meetingPoint-detail.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    RouteDetailComponent,
    RouteCardComponent,
    RoutesListComponent,
    ProfileDetailComponent,
    ClubsListSubcribedComponent,
    ClubsListComponent,
    ClubsDetailComponent,
    PlansListComponent,
    PlansDetailComponent,
    MeetingPointDetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCEaAc7-DAZiOKNpibxBwAfmPFqSBmsgF0' })
  ],
  exports: [
    ProfileDetailComponent,
    RouteDetailComponent,
    RouteCardComponent,
    RoutesListComponent,
    ClubsListSubcribedComponent,
    ClubsListComponent,
    ClubsDetailComponent,
    PlansListComponent,
    PlansDetailComponent,
    MeetingPointDetailComponent
  ]
})
export class ComponentsModule { }
