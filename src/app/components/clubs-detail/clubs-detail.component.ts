import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubModel } from '../../models/club.model';
import { ClubsProvider } from '../../providers/clubs.provider';
import { ProfileProvider } from '../../providers/profile.provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'clubs-detail',
  templateUrl: 'clubs-detail.component.html'
})
export class ClubsDetailComponent implements OnInit {

  @Input() club: ClubModel
  @Input() mode: string;
  @Output() OnNewClub = new EventEmitter<ClubModel>();
  @Output() OnUpdateClub = new EventEmitter<ClubModel>();
  clubObservable: Observable<ClubModel>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clubsProvider: ClubsProvider, private profileProvider: ProfileProvider) {
  }

  ngOnInit() {
    //this.club ? this.mode = "edit" : this.mode = "add";
    if (this.mode == "edit") {
      this.clubObservable = this.clubsProvider.get(this.club.id);
      this.clubObservable.subscribe(
        club => this.club = club
      )
    }
    // else {
    //   this.club = new ClubModel();
    // }
  }

  update() {
    this.clubsProvider.update(this.club);
    this.OnUpdateClub.emit(this.club);
  }

  add() {
    this.clubsProvider.addClub(this.club, this.profileProvider.profile.id)
    this.OnNewClub.emit(this.club);

  }

}
