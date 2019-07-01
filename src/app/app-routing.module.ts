import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  {path: 'blog', component: BlogComponent},
  {path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
