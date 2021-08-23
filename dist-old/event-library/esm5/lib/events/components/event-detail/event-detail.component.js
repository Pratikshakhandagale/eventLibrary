/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-detail/event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { labelMessages } from './../labels';
import { ActivatedRoute } from '@angular/router';
import { EventDetailService } from '../../services/event-detail/event-detail.service';
var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(activatedRoute, eventDetailService) {
        this.activatedRoute = activatedRoute;
        this.eventDetailService = eventDetailService;
        this.labelMessages = labelMessages;
    }
    /**
     * @return {?}
     */
    EventDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.queryParams = params;
        }));
        if (this.queryParams.identifier) {
            this.eventDetailService.getEvent(this.queryParams.identifier).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.eventDetailItem = data.result.event;
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log('err = ', err);
            }));
        }
    };
    EventDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-detail',
                    template: "<div class=\"event-wrapper\">\n    <sb-cover-event-detail [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\"></sb-cover-event-detail>\n    <sb-join-event-button [eventDetailItem]=\"eventDetailItem\" [userData]=\"userData\" [canUnenroll]=\"canUnenroll\"></sb-join-event-button>\n    <sb-advance-event-detail [eventDetailItem]=\"eventDetailItem\"></sb-advance-event-detail>\n\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    EventDetailComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: EventDetailService }
    ]; };
    EventDetailComponent.propDecorators = {
        eventDetailItem: [{ type: Input }],
        userData: [{ type: Input }],
        canUnenroll: [{ type: Input }]
    };
    return EventDetailComponent;
}());
export { EventDetailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFFckY7SUFrQkUsOEJBQ1UsY0FBOEIsRUFDOUIsa0JBQXFDO1FBRHJDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBWi9DLGtCQUFhLEdBQUcsYUFBYSxDQUFDO0lBYzlCLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFBQSxpQkFpQkM7UUFmQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFNO1lBQy9DLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUUvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBUztnQkFDaEYsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMzQyxDQUFDOzs7O1lBQ0MsVUFBQyxHQUFRO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLENBQUMsRUFBQyxDQUFDO1NBQ047SUFHSCxDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9aQUE0QztvQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFSUSxjQUFjO2dCQUNkLGtCQUFrQjs7O2tDQVd4QixLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFnQ1IsMkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXJDWSxvQkFBb0I7OztJQUUvQiw2Q0FBOEI7O0lBQzlCLCtDQUE4Qjs7SUFDOUIsd0NBQXVCOztJQUN2QiwyQ0FBOEI7O0lBQzlCLDJDQUFpQjs7SUFDakIscUNBQWU7O0lBQ2Ysa0RBQXdCOztJQUN4QixtREFBeUI7Ozs7O0lBSXZCLDhDQUFzQzs7Ozs7SUFDdEMsa0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0eyBsYWJlbE1lc3NhZ2VzIH0gZnJvbSAnLi8uLi9sYWJlbHMnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudERldGFpbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWRldGFpbC9ldmVudC1kZXRhaWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWV2ZW50LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbGFiZWxNZXNzYWdlcyA9IGxhYmVsTWVzc2FnZXM7XG4gIEBJbnB1dCgpIGV2ZW50RGV0YWlsSXRlbTogYW55O1xuICBASW5wdXQoKSB1c2VyRGF0YTogYW55O1xuICBASW5wdXQoKSBjYW5VbmVucm9sbDogYm9vbGVhbjtcbiAgcXVlcnlQYXJhbXM6IGFueTtcbiAgaXNOZXc6IGJvb2xlYW47XG4gIGV2ZW50Q3JlYXRlU2VydmljZTogYW55O1xuICBmb3JtRmllbGRQcm9wZXJ0aWVzOiBhbnk7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGV2ZW50RGV0YWlsU2VydmljZTpFdmVudERldGFpbFNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMucXVlcnlQYXJhbXMgPSBwYXJhbXM7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5xdWVyeVBhcmFtcy5pZGVudGlmaWVyKSB7XG4gICAgIFxuICAgICAgdGhpcy5ldmVudERldGFpbFNlcnZpY2UuZ2V0RXZlbnQodGhpcy5xdWVyeVBhcmFtcy5pZGVudGlmaWVyKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50RGV0YWlsSXRlbSA9IGRhdGEucmVzdWx0LmV2ZW50O1xuICAgICAgfSxcbiAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgXG4gIH1cbiBcbn1cblxuXG5cblxuXG4iXX0=