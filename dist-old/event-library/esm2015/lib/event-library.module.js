/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EventsModule } from './events/events.module';
import { EventLibraryComponent } from './event-library.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//services
import { EventDetailService } from './events/services/event-detail/event-detail.service';
import { EventCreateService } from './events/services/event-create/event-create.service';
import { EventLibraryService } from './event-library.service';
import { EventListService } from './events/services/event-list/event-list.service';
import { SbToastService } from './events/services/iziToast/izitoast.service';
import { TimezoneCal } from './events/services/timezone/timezone.service';
import { UserConfigService } from './events/services/userConfig/user-config.service';
import { DataService } from './events/services/data-request/data-request.service';
import { EventService } from "./events/services/event/event.service";
export class EventLibraryModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forChild(config) {
        return {
            ngModule: EventLibraryModule,
            providers: [
                EventLibraryService,
                {
                    provide: "urlConfig",
                    useValue: config
                }
            ]
        };
    }
}
EventLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EventLibraryComponent],
                imports: [
                    EventsModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                ],
                exports: [EventsModule,
                ],
                providers: [
                    EventDetailService,
                    EventCreateService,
                    EventListService,
                    EventLibraryService,
                    SbToastService,
                    TimezoneCal,
                    UserConfigService,
                    DataService,
                    EventService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBdUJyRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUNwQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQVc7UUFDaEMsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNULG1CQUFtQjtnQkFDbkI7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpDSixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsaUJBQWlCO29CQUNqQixXQUFXO29CQUNYLFlBQVk7aUJBQ2I7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudHNNb2R1bGUgfSBmcm9tICcuL2V2ZW50cy9ldmVudHMubW9kdWxlJztcbmltcG9ydCB7IEV2ZW50TGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vZXZlbnQtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcblxuLy9zZXJ2aWNlc1xuaW1wb3J0IHsgRXZlbnREZXRhaWxTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudHMvc2VydmljZXMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50Q3JlYXRlU2VydmljZSB9IGZyb20gJy4vZXZlbnRzL3NlcnZpY2VzL2V2ZW50LWNyZWF0ZS9ldmVudC1jcmVhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudExpYnJhcnlTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC1saWJyYXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRMaXN0U2VydmljZSB9IGZyb20gJy4vZXZlbnRzL3NlcnZpY2VzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFNiVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudHMvc2VydmljZXMvaXppVG9hc3QvaXppdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUaW1lem9uZUNhbCB9IGZyb20gJy4vZXZlbnRzL3NlcnZpY2VzL3RpbWV6b25lL3RpbWV6b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2V2ZW50cy9zZXJ2aWNlcy91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL2V2ZW50cy9zZXJ2aWNlcy9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSBcIi4vZXZlbnRzL3NlcnZpY2VzL2V2ZW50L2V2ZW50LnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRXZlbnRMaWJyYXJ5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEV2ZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbRXZlbnRzTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFdmVudERldGFpbFNlcnZpY2UsXG4gICAgRXZlbnRDcmVhdGVTZXJ2aWNlLFxuICAgIEV2ZW50TGlzdFNlcnZpY2UsXG4gICAgRXZlbnRMaWJyYXJ5U2VydmljZSxcbiAgICBTYlRvYXN0U2VydmljZSxcbiAgICBUaW1lem9uZUNhbCxcbiAgICBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBEYXRhU2VydmljZSxcbiAgICBFdmVudFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpYnJhcnlNb2R1bGUge1xuICAgIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5nTW9kdWxlOiBFdmVudExpYnJhcnlNb2R1bGUsXG4gICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgIEV2ZW50TGlicmFyeVNlcnZpY2UsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogXCJ1cmxDb25maWdcIixcbiAgICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH07XG4gICAgfVxufSJdfQ==