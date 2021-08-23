/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/events.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { JoinEventComponent } from './components/join-event-button/join-event-button.component';
import { AdvanceEventDetailComponent } from './components/advance-event-detail/advance-event-detail.component';
import { CoverEventDetailComponent } from './components/cover-event-detail/cover-event-detail.component';
import { EventFilterComponent } from '../events/components/event-filter/event-filter.component';
import { EventRoutingModule } from './event-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFormElementsModule } from 'common-form-elements';
import { NgxIziToastModule } from 'ngx-izitoast';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollectionIconComponent } from './components/collection-icon/collection-icon.component';
import { AssetBrowserComponent } from './components/asset-browser/asset-browser.component'; // <-- import the module
// <-- import the module
import { SuiModule } from 'ng2-semantic-ui/dist';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
export class EventsModule {
}
EventsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EventDetailComponent,
                    EventListComponent,
                    EventCreateComponent,
                    JoinEventComponent,
                    AdvanceEventDetailComponent,
                    CoverEventDetailComponent,
                    EventFilterComponent,
                    CollectionIconComponent,
                    AssetBrowserComponent
                ],
                imports: [
                    CommonModule,
                    CommonFormElementsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    EventRoutingModule,
                    NgxIziToastModule,
                    HttpClientModule,
                    NgxPaginationModule,
                    SuiModule,
                    InfiniteScrollModule,
                    TranslateModule.forRoot({
                        loader: {
                            provide: TranslateLoader,
                            useFactory: httpTranslateLoader,
                            deps: [HttpClient]
                        }
                    })
                ],
                exports: [
                    EventDetailComponent,
                    EventListComponent,
                    EventCreateComponent,
                    JoinEventComponent,
                    AdvanceEventDetailComponent,
                    CoverEventDetailComponent,
                    EventFilterComponent
                ],
                providers: []
            },] }
];
// AOT compilation support
/**
 * @param {?} http
 * @return {?}
 */
export function httpTranslateLoader(http) {
    return new TranslateHttpLoader(http);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9ldmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDaEcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDekcsT0FBTyxFQUFFLG9CQUFvQixFQUFDLE1BQU0sMERBQTBELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQyxDQUFDLHdCQUF3Qjs7QUFDcEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBNEMzRCxNQUFNLE9BQU8sWUFBWTs7O1lBMUN4QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsMkJBQTJCO29CQUMzQix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHdCQUF3QjtvQkFDeEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsU0FBUztvQkFDVCxvQkFBb0I7b0JBQ3BCLGVBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLG1CQUFtQjs0QkFDL0IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO3lCQUNuQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtvQkFDM0IseUJBQXlCO29CQUN6QixvQkFBb0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxFQUFHO2FBQ2Y7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBZ0I7SUFDbEQsT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSm9pbkV2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2pvaW4tZXZlbnQtYnV0dG9uL2pvaW4tZXZlbnQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZHZhbmNlRXZlbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWR2YW5jZS1ldmVudC1kZXRhaWwvYWR2YW5jZS1ldmVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvdmVyRXZlbnREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY292ZXItZXZlbnQtZGV0YWlsL2NvdmVyLWV2ZW50LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRGaWx0ZXJDb21wb25lbnR9IGZyb20gJy4uL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWZpbHRlci9ldmVudC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZXZlbnQtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Gb3JtRWxlbWVudHNNb2R1bGUgfSBmcm9tICdjb21tb24tZm9ybS1lbGVtZW50cyc7XG5pbXBvcnQgeyBOZ3hJemlUb2FzdE1vZHVsZSB9IGZyb20gJ25neC1peml0b2FzdCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge05neFBhZ2luYXRpb25Nb2R1bGV9IGZyb20gJ25neC1wYWdpbmF0aW9uJztcbmltcG9ydCB7IENvbGxlY3Rpb25JY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbGxlY3Rpb24taWNvbi9jb2xsZWN0aW9uLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFzc2V0QnJvd3NlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hc3NldC1icm93c2VyL2Fzc2V0LWJyb3dzZXIuY29tcG9uZW50JzsgLy8gPC0tIGltcG9ydCB0aGUgbW9kdWxlXG5pbXBvcnQgeyBTdWlNb2R1bGUgfSBmcm9tICduZzItc2VtYW50aWMtdWkvZGlzdCc7XG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB9IGZyb20gJ25neC1pbmZpbml0ZS1zY3JvbGwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFdmVudERldGFpbENvbXBvbmVudCwgXG4gICAgRXZlbnRMaXN0Q29tcG9uZW50LCBcbiAgICBFdmVudENyZWF0ZUNvbXBvbmVudCxcbiAgICBKb2luRXZlbnRDb21wb25lbnQsXG4gICAgQWR2YW5jZUV2ZW50RGV0YWlsQ29tcG9uZW50LFxuICAgIENvdmVyRXZlbnREZXRhaWxDb21wb25lbnQsXG4gICAgRXZlbnRGaWx0ZXJDb21wb25lbnQsXG4gICAgQ29sbGVjdGlvbkljb25Db21wb25lbnQsXG4gICAgQXNzZXRCcm93c2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29tbW9uRm9ybUVsZW1lbnRzTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRXZlbnRSb3V0aW5nTW9kdWxlLFxuICAgIE5neEl6aVRvYXN0TW9kdWxlLCBcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5neFBhZ2luYXRpb25Nb2R1bGUsXG4gICAgU3VpTW9kdWxlLFxuICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGxvYWRlcjoge1xuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IGh0dHBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFdmVudERldGFpbENvbXBvbmVudCxcbiAgICBFdmVudExpc3RDb21wb25lbnQsXG4gICAgRXZlbnRDcmVhdGVDb21wb25lbnQsXG4gICAgSm9pbkV2ZW50Q29tcG9uZW50LFxuICAgIEFkdmFuY2VFdmVudERldGFpbENvbXBvbmVudCxcbiAgICBDb3ZlckV2ZW50RGV0YWlsQ29tcG9uZW50LFxuICAgIEV2ZW50RmlsdGVyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogWyBdXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c01vZHVsZSB7IH1cblxuLy8gQU9UIGNvbXBpbGF0aW9uIHN1cHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBodHRwVHJhbnNsYXRlTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xufVxuIl19