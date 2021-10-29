import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { ViewCharacterComponent } from './view-character/view-character.component';

const routes: Routes = [
  { path: 'characters', component: DisplayComponent },
  { path: 'characters/:id', component: ViewCharacterComponent},
  { path: '', redirectTo: '/characters', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
