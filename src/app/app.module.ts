import {HttpClientModule} from '@angular/common/http'; //bunu yazdık
import { FormsModule, ReactiveFormsModule } from '@angular/forms';          //bunu yazdık
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiService } from './inspection-api.service'; //bunu yazdık

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //bunu yazdık
    FormsModule,      //bunu yazdık
    ReactiveFormsModule //bunu yazdık
  ],
  providers: [InspectionApiService], //bunu yazdık
  bootstrap: [AppComponent]
})
export class AppModule { }
