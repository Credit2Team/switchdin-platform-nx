import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as CoursesActions from './courses.actions';
import * as CoursesFeature from './courses.reducer';
import * as CoursesSelectors from './courses.selectors';

@Injectable()
export class CoursesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CoursesSelectors.getCoursesLoaded));
  allCourses$ = this.store.pipe(select(CoursesSelectors.getAllCourses));
  selectedCourses$ = this.store.pipe(select(CoursesSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CoursesActions.init());
  }
}
