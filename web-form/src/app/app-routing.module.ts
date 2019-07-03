import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginviewComponent } from './loginview/loginview.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginviewComponent },
  { path: 'register', component: RegisterviewComponent },
  { path: 'user', component: UserviewComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }








// const routes: Routes = [
//   { path: 'heroes', component: HeroesComponent }
// ];