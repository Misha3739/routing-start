import {NgModule} from '@angular/core';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {AuthGuardService} from './auth-guard-service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate.guard';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server-resolver';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'users' , component: UsersComponent, children: [
    { path: ':id/:name' , component: UserComponent},
  ]},

  { path: 'servers' ,

    component: ServersComponent,
    children: [
    { path: ':id', canActivate: [AuthGuardService], component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', canActivate: [AuthGuardService], component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ]
  },
  {path: '**', component: ErrorPageComponent, data: {message: 'Page not found!'} }

];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]})
export class AppRoutingModule {

}
