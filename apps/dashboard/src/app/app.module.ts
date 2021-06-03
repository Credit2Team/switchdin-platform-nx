import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreStateModule, coreStateRoutes } from '@swdin/core-state';
import { MaterialModule, materialRoutes } from '@swdin/material';
import { UiLoginModule, uiLoginRoutes } from '@swdin/ui-login';
import { UiToolbarModule, uiToolbarRoutes } from '@swdin/ui-toolbar';
import { TestingModule, testingRoutes } from '@swdin/testing';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, CoursesComponent, CoursesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    TestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
