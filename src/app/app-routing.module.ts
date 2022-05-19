import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PullRequestComponent } from './pages/pull-request/pull-request.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pull-request', component: PullRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
