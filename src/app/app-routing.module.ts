import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {InfoComponent} from './info/info.component';
import {VideoComponent} from './video/video.component';
import {GalleryComponent} from './gallery/gallery.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full'
  },
  {path: 'blog', component: BlogComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'info', component: InfoComponent},
  {path: 'video', component: VideoComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
