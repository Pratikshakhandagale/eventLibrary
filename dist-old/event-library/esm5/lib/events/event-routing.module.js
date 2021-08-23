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
var routes = [
    //{ path: '', redirectTo: '/event', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'event', component: EventDetailComponent },
    { path: 'event-post', component: EventCreateComponent },
    { path: 'event-filter', component: EventFilterComponent }
];
var EventRoutingModule = /** @class */ (function () {
    function EventRoutingModule() {
    }
    EventRoutingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule]
                },] }
    ];
    return EventRoutingModule;
}());
export { EventRoutingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvZXZlbnQtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7SUFFbEYsTUFBTSxHQUFXO0lBQ3JCLHdEQUF3RDtJQUN4RCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFDO0NBQ3pEO0FBRUQ7SUFBQTtJQU1rQyxDQUFDOztnQkFObEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDeEI7O0lBR2lDLHlCQUFDO0NBQUEsQUFObkMsSUFNbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRXZlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtZmlsdGVyL2V2ZW50LWZpbHRlci5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgLy97IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2V2ZW50JywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnZXZlbnRzJywgY29tcG9uZW50OiBFdmVudExpc3RDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZXZlbnQnLCBjb21wb25lbnQ6IEV2ZW50RGV0YWlsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2V2ZW50LXBvc3QnLCBjb21wb25lbnQ6IEV2ZW50Q3JlYXRlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2V2ZW50LWZpbHRlcicsIGNvbXBvbmVudDogRXZlbnRGaWx0ZXJDb21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBFdmVudFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=