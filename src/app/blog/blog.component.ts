import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Upload} from '../services/upload';
import {MatDialog} from '@angular/material';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  showSpinner: boolean = true;
  blogList: Observable<Upload[]>;
  blogListRef: AngularFireList<Upload>;

  constructor(private afDb: AngularFireDatabase,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.blogListRef = this.afDb.list('blogs');
    this.blogList = this.blogListRef.valueChanges();
    this.blogList.subscribe(() => this.showSpinner = false);
  }

  openDialog(image): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '400px',
      data: {image: image}
    });
  }

}
