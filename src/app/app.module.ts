import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AstService } from './ast-service.service';
import { XrmIntegrationService } from './xrm-integration.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    HttpModule, ReactiveFormsModule
  ],
  providers: [AstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
