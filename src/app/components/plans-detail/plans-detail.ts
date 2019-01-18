import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  PlanModel,
  ClubModel,
  RouteModel
} from '../../models';
import {
  RoutesProvider
} from '../../providers/routes.provider';
import {
  ClubsProvider
} from '../../providers/clubs.provider';
import { NavController } from 'ionic-angular';
import { MeetingPointDetailPage } from '../../../pages/meetingPoint-detail/meeting-point-detail.page';

/**
 * Generated class for the PlansDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'plans-detail',
  templateUrl: 'plans-detail.html'
})
export class PlansDetailComponent implements OnInit {

  @Input() plan: PlanModel;
  mode: string;
  club: ClubModel;
  route: RouteModel;
  vencida: boolean;


  constructor(private routeProvider: RoutesProvider, private clubsProvider: ClubsProvider, private nav:NavController) {}

  ngOnInit(): void {

    this.vencida = this.plan.time <= new Date(Date.now());

    if (this.mode !== 'add') {
      this.clubsProvider.get(this.plan.idClub).subscribe(
        club => this.club = club
      )
      this.routeProvider.get(this.plan.idRuta).subscribe(
        route => this.route = route
      )
    }
  }

  gotoMeetingPointDetail(){

      this.nav.push(MeetingPointDetailPage, { club: this.club, meetingPoint: this.club.meetingPoints[this.plan.idMeetingPoint] })
    
  }


}
