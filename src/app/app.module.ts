import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {BlogComponent} from './blog/blog.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {InfoComponent} from './info/info.component';
import {VideoComponent} from './video/video.component';
import {ImageDialogComponent} from './image-dialog/image-dialog.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDDX6D0cNZV3TLLea-tj5igxOxr1Ev7htE',
  authDomain: 'driftlon-917d6.firebaseapp.com',
  databaseURL: 'https://driftlon-917d6.firebaseio.com',
  projectId: 'driftlon-917d6',
  storageBucket: 'driftlon-917d6.appspot.com',
  messagingSenderId: '477706615761',
  appId: '1:477706615761:web:d52b9516177dae17'
};

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    InfoComponent,
    VideoComponent,
    ImageDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent],
})
export class AppModule {
}
