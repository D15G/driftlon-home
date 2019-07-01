import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatGridListModule
  ]
})
export class MaterialModule {
}
