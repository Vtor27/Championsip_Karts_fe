import { Routes } from '@angular/router';
import { StandingsComponent } from './pages/standings/standings';
import { CalendarComponent } from './pages/calendar/calendar';
import { RaceResultsComponent } from './pages/race-results/race-results';
import { DriverProfileComponent } from './pages/driver-profile/driver-profile';

export const routes: Routes = [
  { path: '', redirectTo: '/standings', pathMatch: 'full' },
  { path: 'standings', component: StandingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'race/:id', component: RaceResultsComponent },
  { path: 'driver/:id', component: DriverProfileComponent },
  { path: '**', redirectTo: '/standings' },
];
