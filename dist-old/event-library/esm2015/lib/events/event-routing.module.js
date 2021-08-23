/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/event-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { EventFilterComponent } from './components/event-filter/event-filter.component';
/** @type {?} */
const routes = [
    //{ path: '', redirectTo: '/event', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'event', component: EventDetailComponent },
    { path: 'event-post', component: EventCreateComponent },
    { path: 'event-filter', component: EventFilterComponent }
];
export class EventRoutingModule {
}
EventRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvZXZlbnQtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7TUFFbEYsTUFBTSxHQUFXO0lBQ3JCLHdEQUF3RDtJQUN4RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFDO0NBQ3pEO0FBUUQsTUFBTSxPQUFPLGtCQUFrQjs7O1lBTjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBFdmVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudERldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudENyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldmVudC1jcmVhdGUvZXZlbnQtY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ldmVudC1maWx0ZXIvZXZlbnQtZmlsdGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvL3sgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvZXZlbnQnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICdldmVudHMnLCBjb21wb25lbnQ6IEV2ZW50TGlzdENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdldmVudCcsIGNvbXBvbmVudDogRXZlbnREZXRhaWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZXZlbnQtcG9zdCcsIGNvbXBvbmVudDogRXZlbnRDcmVhdGVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZXZlbnQtZmlsdGVyJywgY29tcG9uZW50OiBFdmVudEZpbHRlckNvbXBvbmVudH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEV2ZW50Um91dGluZ01vZHVsZSB7IH1cbiJdfQ==