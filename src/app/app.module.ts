import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalStorageModule } from 'angular-2-local-storage';
import 'polyfills';
import 'reflect-metadata';
import 'zone.js/dist/zone-mix';

import { AboutDialogComponent } from 'app/components/settings/dialog/about-dialog.component';
import { DeleteFilesDialogComponent } from 'app/components/settings/dialog/delete-files-dialog.component';
import { SettingsComponent } from 'app/components/settings/settings.component';
import { StandupPickerComponent } from 'app/components/standup-picker/standup-picker.component';
import { BackgroundImageDirective } from 'app/directives/background-image.directive';
import { ArchiverService } from 'app/providers/archiver.service';
import { SettingsService } from 'app/providers/settings.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './components/settings/dialog/confirm-dialog.component';
import { ElectronService } from './providers/electron.service';
import { FileService } from './providers/file.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    StandupPickerComponent,
    SettingsComponent,
    ConfirmDialogComponent,
    AboutDialogComponent,
    DeleteFilesDialogComponent,
    BackgroundImageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LocalStorageModule.withConfig({
      prefix: 'StandupPicker',
      storageType: 'localStorage'
    }),
    // Angular Material Design
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AboutDialogComponent,
    DeleteFilesDialogComponent
  ],
  providers: [
    ElectronService,
    SettingsService,
    ArchiverService,
    FileService,
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
