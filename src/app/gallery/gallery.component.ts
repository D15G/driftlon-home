import {Component, OnInit} from '@angular/core';
import {FirebaseStorage} from '@angular/fire';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(storageRef: FirebaseStorage) {
  }

  ngOnInit() {
  }


}
