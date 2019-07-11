import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: SafeResourceUrl[] = [];

  constructor(private afDb: AngularFireStorage, private sanitizer: DomSanitizer, private dialog: MatDialog) {
  }

  async ngOnInit() {
    await this.afDb.storage.ref('images').list().then(i => {
      i.items.forEach(r => {
        r.getDownloadURL().then(url => {
          this.images.push(url);
        });
      });
    });
  }

  openDialog(image): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '1200px',
      data: {image: image}
    });
  }

}

