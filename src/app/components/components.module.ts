import { NgModule } from '@angular/core';
import { ProfileDetailComponent } from './profile-detail/profile-detail';
import { RoutesDetailComponent } from './routes-detail/routes-detail';
import { RoutesListComponent } from './routes-list/routes-list';
import { ClubsListSubcribedComponent } from './clubs-list-subcribed/clubs-list-subcribed';
import { ClubsListComponent } from './clubs-list/clubs-list';
import { ClubsDetailComponent } from './clubs-detail/clubs-detail';
@NgModule({
	declarations: [RoutesDetailComponent,
    RoutesListComponent,
		ProfileDetailComponent,
    ClubsListSubcribedComponent,
    ClubsListComponent,
    ClubsDetailComponent],
	imports: [],
	exports: [
		ProfileDetailComponent,
		RoutesDetailComponent,
    RoutesListComponent,
    ClubsListSubcribedComponent,
    ClubsListComponent,
    ClubsDetailComponent]
})
export class ComponentsModule {}
