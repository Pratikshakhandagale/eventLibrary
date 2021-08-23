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
var EventLibraryModule = /** @class */ (function () {
    function EventLibraryModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    EventLibraryModule.forChild = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
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
    };
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
    return EventLibraryModule;
}());
export { EventLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudC1saWJyYXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRXJFO0lBQUE7SUFrQ0EsQ0FBQzs7Ozs7SUFaaUIsMkJBQVE7Ozs7SUFBdEIsVUFBdUIsTUFBVztRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1QsbUJBQW1CO2dCQUNuQjtvQkFDRSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBakNKLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDckMsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVk7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsWUFBWTtxQkFDYjtpQkFDRjs7SUFjRCx5QkFBQztDQUFBLEFBbENELElBa0NDO1NBYlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50c01vZHVsZSB9IGZyb20gJy4vZXZlbnRzL2V2ZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgRXZlbnRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG4vL3NlcnZpY2VzXG5pbXBvcnQgeyBFdmVudERldGFpbFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50cy9zZXJ2aWNlcy9ldmVudC1kZXRhaWwvZXZlbnQtZGV0YWlsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRDcmVhdGVTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudHMvc2VydmljZXMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TGlicmFyeVNlcnZpY2UgfSBmcm9tICcuL2V2ZW50LWxpYnJhcnkuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudHMvc2VydmljZXMvZXZlbnQtbGlzdC9ldmVudC1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2JUb2FzdFNlcnZpY2UgfSBmcm9tICcuL2V2ZW50cy9zZXJ2aWNlcy9pemlUb2FzdC9peml0b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbWV6b25lQ2FsIH0gZnJvbSAnLi9ldmVudHMvc2VydmljZXMvdGltZXpvbmUvdGltZXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQ29uZmlnU2VydmljZSB9IGZyb20gJy4vZXZlbnRzL3NlcnZpY2VzL3VzZXJDb25maWcvdXNlci1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vZXZlbnRzL3NlcnZpY2VzL2RhdGEtcmVxdWVzdC9kYXRhLXJlcXVlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi9ldmVudHMvc2VydmljZXMvZXZlbnQvZXZlbnQuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtFdmVudExpYnJhcnlDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgRXZlbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtFdmVudHNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEV2ZW50RGV0YWlsU2VydmljZSxcbiAgICBFdmVudENyZWF0ZVNlcnZpY2UsXG4gICAgRXZlbnRMaXN0U2VydmljZSxcbiAgICBFdmVudExpYnJhcnlTZXJ2aWNlLFxuICAgIFNiVG9hc3RTZXJ2aWNlLFxuICAgIFRpbWV6b25lQ2FsLFxuICAgIFVzZXJDb25maWdTZXJ2aWNlLFxuICAgIERhdGFTZXJ2aWNlLFxuICAgIEV2ZW50U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlicmFyeU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JDaGlsZChjb25maWc6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmdNb2R1bGU6IEV2ZW50TGlicmFyeU1vZHVsZSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgRXZlbnRMaWJyYXJ5U2VydmljZSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBcInVybENvbmZpZ1wiLFxuICAgICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICB9XG59Il19