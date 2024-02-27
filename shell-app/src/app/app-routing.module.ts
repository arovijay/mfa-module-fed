import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';

const routes: Routes = [
  { path: '', redirectTo: '/alerts', pathMatch: 'full'},
  {
    path: 'mpApp',
    loadChildren: () => { return loadRemoteModule({
      remoteEntry: 'http://localhost:4100/remoteEntry.js',
      remoteName: 'remoteApp',
      exposedModule: './MpModule'
    }).then((m) => m.MpModule).catch(err => console.log(err)) }
  },
  {
    path: 'alerts', component: AlertsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
