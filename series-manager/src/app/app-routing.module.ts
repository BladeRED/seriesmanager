import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SerieListComponent } from './views/serie-list/serie-list.component';
import { SerieNewComponent } from './views/serie-new/serie-new.component';
import { SerieDetailsComponent } from './views/serie-details/serie-details.component';
import { SerieEditComponent } from './views/serie-edit/serie-edit.component';
import { ErrorComponent } from './views/error/error.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'series', canActivate: [AuthGuard], component: SerieListComponent },
  {
    path: 'series/new',
    canActivate: [AuthGuard],
    component: SerieNewComponent,
  },
  {
    path: 'series/:id',
    canActivate: [AuthGuard],
    component: SerieDetailsComponent,
  },
  {
    path: 'series/edit/:id',
    canActivate: [AuthGuard],
    component: SerieEditComponent,
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
