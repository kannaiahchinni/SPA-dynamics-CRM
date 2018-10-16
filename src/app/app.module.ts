import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AstService } from './ast-service.service';
import { XrmIntegrationService } from './xrm-integration.service';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WidgetComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule,
    HttpModule, ReactiveFormsModule, FormsModule, MatTabsModule
  ],
  providers: [AstService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
