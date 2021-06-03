import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCourses from './courses/courses.reducer';
import { CoursesEffects } from './courses/courses.effects';
import { CoursesFacade } from './courses/courses.facade';

export const coreStateRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(
      fromCourses.COURSES_FEATURE_KEY,
      fromCourses.reducer
    ),
    EffectsModule.forFeature([CoursesEffects]),
  ],
  providers: [CoursesFacade],
})
export class CoreStateModule {}
