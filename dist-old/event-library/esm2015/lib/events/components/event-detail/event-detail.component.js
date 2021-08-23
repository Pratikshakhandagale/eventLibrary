/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { labelMessages } from './../labels';
import { ActivatedRoute } from '@angular/router';
import { EventDetailService } from '../../services/event-detail/event-detail.service';
export class EventDetailComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} eventDetailService
     */
    constructor(activatedRoute, eventDetailService) {
        this.activatedRoute = activatedRoute;
        this.eventDetailService = eventDetailService;
        this.labelMessages = labelMessages;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.queryParams = params;
        }));
        if (this.queryParams.identifier) {
            this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.eventDetailItem = data.result.event;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.log('err = ', err);
            }));
        }
    }
}
EventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-detail',
                template: "<div class=\"event-wrapper\">\n    <sb-cover-event-detail [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\"></sb-cover-event-detail>\n    <sb-join-event-button [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\" [canUnenroll]=\"canUnenroll\"></sb-join-event-button>\n    <sb-advance-event-detail [eventDetailItem]=\"eventDetailItem\"></sb-advance-event-detail>\n\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
/** @nocollapse */
EventDetailComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: EventDetailService }
];
EventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    canUnenroll: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    EventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    EventDetailComponent.prototype.userData;
    /** @type {?} */
    EventDetailComponent.prototype.canUnenroll;
    /** @type {?} */
    EventDetailComponent.prototype.queryParams;
    /** @type {?} */
    EventDetailComponent.prototype.isNew;
    /** @type {?} */
    EventDetailComponent.prototype.eventCreateService;
    /** @type {?} */
    EventDetailComponent.prototype.formFieldProperties;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    EventDetailComponent.prototype.eventDetailService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFRckYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFZL0IsWUFDVSxjQUE4QixFQUM5QixrQkFBcUM7UUFEckMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFaL0Msa0JBQWEsR0FBRyxhQUFhLENBQUM7SUFjOUIsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNwRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzNDLENBQUM7Ozs7WUFDQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFHSCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9aQUE0QztnQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBUlEsY0FBYztZQUNkLGtCQUFrQjs7OzhCQVd4QixLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhOLDZDQUE4Qjs7SUFDOUIsK0NBQThCOztJQUM5Qix3Q0FBdUI7O0lBQ3ZCLDJDQUE4Qjs7SUFDOUIsMkNBQWlCOztJQUNqQixxQ0FBZTs7SUFDZixrREFBd0I7O0lBQ3hCLG1EQUF5Qjs7Ozs7SUFJdkIsOENBQXNDOzs7OztJQUN0QyxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnR7IGxhYmVsTWVzc2FnZXMgfSBmcm9tICcuLy4uL2xhYmVscydcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEV2ZW50RGV0YWlsU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V2ZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBsYWJlbE1lc3NhZ2VzID0gbGFiZWxNZXNzYWdlcztcbiAgQElucHV0KCkgZXZlbnREZXRhaWxJdGVtOiBhbnk7XG4gIEBJbnB1dCgpIHVzZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNhblVuZW5yb2xsOiBib29sZWFuO1xuICBxdWVyeVBhcmFtczogYW55O1xuICBpc05ldzogYm9vbGVhbjtcbiAgZXZlbnRDcmVhdGVTZXJ2aWNlOiBhbnk7XG4gIGZvcm1GaWVsZFByb3BlcnRpZXM6IGFueTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgZXZlbnREZXRhaWxTZXJ2aWNlOkV2ZW50RGV0YWlsU2VydmljZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IHBhcmFtcztcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpIHtcbiAgICAgXG4gICAgICB0aGlzLmV2ZW50RGV0YWlsU2VydmljZS5nZXRFdmVudCh0aGlzLnF1ZXJ5UGFyYW1zLmlkZW50aWZpZXIpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnREZXRhaWxJdGVtID0gZGF0YS5yZXN1bHQuZXZlbnQ7XG4gICAgICB9LFxuICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJyID0gJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICBcbiAgfVxuIFxufVxuXG5cblxuXG5cbiJdfQ==