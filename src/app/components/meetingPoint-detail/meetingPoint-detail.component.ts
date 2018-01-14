import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClubModel } from '../../models/club.model';
import { MeetingPointModel } from '../../models/meetingPoint.model';
import { ToastProvider } from '../../providers/toast.provider';
import { ClubsProvider } from '../../providers/clubs.provider';

/**
 * Generated class for the RoutesDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'meetingPoint-detail',
  templateUrl: 'meetingPoint-detail.component.html'
})
export class MeetingPointDetailComponent implements OnInit, OnDestroy {

  @Input() club: ClubModel
  @Input() meetingPoint?: MeetingPointModel;
  mode: string;
  activeMap: boolean = false; // si el mapa está activado se actualizan las coordenadas del meetingpoint al mover el mapa

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastProvider: ToastProvider, private clubsProvider: ClubsProvider) {

  }


  /**

   */
  ngOnInit() {
    if (this.meetingPoint) {
      this.mode = "edit"
    } else {
      this.meetingPoint = new MeetingPointModel();
      this.mode = "add"
    }

  }

  ngOnDestroy() {
  }

  update() {
    if (this.mode == "add") {
      //hacemos los tipos como objetos para grabar con firebase
      let MeetingPointObj = Object.assign({}, this.meetingPoint);
      MeetingPointObj.coordinates = { lat: this.meetingPoint.coordinates.lat, lon: this.meetingPoint.coordinates.lon };

      this.club.meetingPoints.push(MeetingPointObj);
      this.clubsProvider.update(this.club);
      this.toastProvider.presentToast("Punto de encuentro añadido.")
    } else {
      this.clubsProvider.update(this.club);
      this.toastProvider.presentToast("Punto de encuentro actualizado.")
    }

    this.navCtrl.pop();

  }

  updateCoordinatesFromMap(mapCoordinates: any) {
    if (this.activeMap) this.meetingPoint.coordinates = { lat: mapCoordinates.lat, lon: mapCoordinates.lng }

  }

}
