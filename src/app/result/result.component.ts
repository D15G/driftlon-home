import { Component, OnInit } from '@angular/core';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})



export class ResultComponent implements OnInit {
   images = [
    {image: 'assets/result-image/2019-07-11_09-30-32.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_altitude.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_climb_rate.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_humidity.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_pressure.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_speed.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_temperature.png'},
    {image: 'assets/result-image/datenlogger_auswertung_time_voltage.png'},
  ];
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  openDialog(image): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      width: '1200px',
      data: {image: image}
    });
  }
}
