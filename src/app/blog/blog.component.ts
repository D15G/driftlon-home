import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Upload} from '../services/upload';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogList: Observable<Upload[]>;
  blogListRef: AngularFireList<Upload>;

  constructor(private afDb: AngularFireDatabase) {
  }

  ngOnInit() {
    this.blogListRef = this.afDb.list('blogs');
    this.blogList = this.blogListRef.valueChanges();
  }

}
