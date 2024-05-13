import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PagingComponent } from './paging/paging.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { EditingComponent } from './editing/editing.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'paging', component: PagingComponent, data: { text: 'Paging' } },
  { path: 'sorting', component: SortingComponent, data: { text: 'Sorting' } },
  { path: 'filtering', component: FilteringComponent, data: { text: 'Filtering' } },
  { path: 'editing', component: EditingComponent, data: { text: 'Editing' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
