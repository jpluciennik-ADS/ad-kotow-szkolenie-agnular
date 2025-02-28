import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatsOverviewComponent } from './cats/cats-overview/cats-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { CatsDetailViewComponent } from './cats/cats-detail-view/cats-detail-view.component';
import { CatsAdoptionFormComponent } from './cats/cats-adoption-form/cats-adoption-form.component';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    CatsOverviewComponent,
    CatsDetailViewComponent,
    CatsAdoptionFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
