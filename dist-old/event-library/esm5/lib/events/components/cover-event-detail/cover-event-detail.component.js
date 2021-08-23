/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/cover-event-detail/cover-event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { labelMessages } from './../labels';
import { EventService } from '../../services/event/event.service';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { DataService } from '../../services/data-request/data-request.service';
import { TranslateService } from '@ngx-translate/core';
var CoverEventDetailComponent = /** @class */ (function () {
    function CoverEventDetailComponent(router, eventService, timezoneCal, dataService, translate) {
        this.router = router;
        this.eventService = eventService;
        this.timezoneCal = timezoneCal;
        this.dataService = dataService;
        this.translate = translate;
        this.isOwner = true;
        this.labelMessages = labelMessages;
        this.isEnrolled = false;
        this.retireEventId = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CoverEventDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataService.get({url : 'https://jsonplaceholder.typicode.com/todos/1'}).subscribe(response => 
        //   {
        //     console.log({response});
        //   });
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isOwner = (_this.eventDetailItem.owner == _this.userData) ? true : false;
            _this.timezoneshort = _this.timezoneCal.timeZoneAbbreviated();
            _this.setDateTimeOnCover();
        }), 1000);
    };
    /**
     * for show Date Time as per timezone
     */
    /**
     * for show Date Time as per timezone
     * @return {?}
     */
    CoverEventDetailComponent.prototype.setDateTimeOnCover = /**
     * for show Date Time as per timezone
     * @return {?}
     */
    function () {
        this.eStart = (this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)).toLocaleString();
        this.eEnd = (this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime)).toLocaleString();
    };
    /**
     * @param {?} identifier
     * @param {?} versionKey
     * @return {?}
     */
    CoverEventDetailComponent.prototype.upate = /**
     * @param {?} identifier
     * @param {?} versionKey
     * @return {?}
     */
    function (identifier, versionKey) {
        this.router.navigate(['/event-post'], {
            queryParams: {
                identifier: identifier,
                versionKey: versionKey
            }
        });
    };
    /**
     * @param {?} identifier
     * @return {?}
     */
    CoverEventDetailComponent.prototype.retireEvent = /**
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        this.retireEventId.emit(identifier);
    };
    CoverEventDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-cover-event-detail',
                    template: "<div>\n    <div class=\"d-flex sb-bg-color-gray-0 w-100\">\n        <img class=\"w-30 coverImg\" *ngIf=\"eventDetailItem?.posterImage\" src=\"{{eventDetailItem?.posterImage}}\" />\n        <img class=\"w-30 coverImg\" *ngIf=\"!eventDetailItem?.posterImage\" src=\"./assets/images/eventcover.jpg\" />\n\n\n        <div class=\"ml-20\">\n            <h2 class=\"fs-1.3\">{{eventDetailItem?.name}}</h2>\n            <!-- <span>{{'by' | translate}} {{eventDetailItem?.owner}}</span> -->\n\n            <div class=\"mt-12\" *ngIf=\"eStart\">\n                <div>\n                    <i class=\"fa fa-calendar fs-1\"></i> <span class=\"fs-0-92\"> &nbsp; {{eStart}} - {{eEnd}} ({{timezoneshort}})</span>\n                </div>\n\n                <div *ngIf=\"isOwner\">\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-normal ripple mt-20 mr-12 w-30\" (click)=\"upate(eventDetailItem?.identifier, eventDetailItem?.versionKey);\">{{'edit' | translate}}</button>\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-error sb-btn-normal ripple mt-10 mr-12 w-30\" (click)=\"retireEvent(eventDetailItem?.identifier);\">{{'retire' | translate}}</button>\n\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 mr-12\" (click)=\"upate(eventDetailItem.identifier);\">{{'edit' | translate}}</button> -->\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal  mt-10 mr-12\" (click)=\"retireEvent(eventDetailItem.identifier);\">{{'retire' | translate}}</button> -->\n                    <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n                    <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n\n                </div>\n            </div>\n            <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n            <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Online'\" class=\"sb-label-status sb-label-status-success ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Offline'\" class=\"sb-label-status sb-label-status-error ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-error\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'OnlineAndOffline'\" class=\"sb-label-status sb-label-primary-100 ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-primary\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n\n    </div>\n</div>",
                    styles: [".coverImg{-o-object-fit:cover;object-fit:cover}"]
                }] }
    ];
    /** @nocollapse */
    CoverEventDetailComponent.ctorParameters = function () { return [
        { type: Router },
        { type: EventService },
        { type: TimezoneCal },
        { type: DataService },
        { type: TranslateService }
    ]; };
    CoverEventDetailComponent.propDecorators = {
        eventDetailItem: [{ type: Input }],
        userData: [{ type: Input }],
        retireEventId: [{ type: Output }]
    };
    return CoverEventDetailComponent;
}());
export { CoverEventDetailComponent };
if (false) {
    /** @type {?} */
    CoverEventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    CoverEventDetailComponent.prototype.userData;
    /** @type {?} */
    CoverEventDetailComponent.prototype.isOwner;
    /** @type {?} */
    CoverEventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    CoverEventDetailComponent.prototype.eStart;
    /** @type {?} */
    CoverEventDetailComponent.prototype.eEnd;
    /** @type {?} */
    CoverEventDetailComponent.prototype.isEnrolled;
    /** @type {?} */
    CoverEventDetailComponent.prototype.items;
    /** @type {?} */
    CoverEventDetailComponent.prototype.timezoneshort;
    /** @type {?} */
    CoverEventDetailComponent.prototype.retireEventId;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.eventService;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.timezoneCal;
    /**
     * @type {?}
     * @private
     */
    CoverEventDetailComponent.prototype.dataService;
    /** @type {?} */
    CoverEventDetailComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292ZXItZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2NvdmVyLWV2ZW50LWRldGFpbC9jb3Zlci1ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFHLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWVFLG1DQUNVLE1BQWEsRUFDYixZQUEwQixFQUMxQixXQUF3QixFQUN4QixXQUF3QixFQUN6QixTQUEyQjtRQUoxQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFacEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUc5QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBVWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQURyRCxDQUFDOzs7O0lBR0QsNENBQVE7OztJQUFSO1FBQ0Usc0dBQXNHO1FBQ3RHLE1BQU07UUFDTiwrQkFBK0I7UUFDL0IsUUFBUTtRQUpWLGlCQVlDO1FBTkMsVUFBVTs7O1FBQUM7WUFDVixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUUzRSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1RCxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsc0RBQWtCOzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzSCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZILENBQUM7Ozs7OztJQUVELHlDQUFLOzs7OztJQUFMLFVBQU0sVUFBVSxFQUFFLFVBQVU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxXQUFXLEVBQUU7Z0JBQ1gsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFVBQVUsRUFBRSxVQUFVO2FBQ3ZCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBVzs7OztJQUFYLFVBQVksVUFBa0I7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxrMEdBQWtEOztpQkFFbkQ7Ozs7Z0JBWFEsTUFBTTtnQkFFTixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsV0FBVztnQkFDWCxnQkFBZ0I7OztrQ0FRdEIsS0FBSzsyQkFDTCxLQUFLO2dDQWVMLE1BQU07O0lBcUNULGdDQUFDO0NBQUEsQUEzREQsSUEyREM7U0F0RFkseUJBQXlCOzs7SUFDcEMsb0RBQThCOztJQUM5Qiw2Q0FBMEI7O0lBQzFCLDRDQUF3Qjs7SUFDeEIsa0RBQThCOztJQUM5QiwyQ0FBWTs7SUFDWix5Q0FBVTs7SUFDViwrQ0FBNEI7O0lBQzVCLDBDQUFXOztJQUNYLGtEQUF1Qjs7SUFRdkIsa0RBQXFEOzs7OztJQU5uRCwyQ0FBcUI7Ozs7O0lBQ3JCLGlEQUFrQzs7Ozs7SUFDbEMsZ0RBQWdDOzs7OztJQUNoQyxnREFBZ0M7O0lBQ2hDLDhDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0ICwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0eyBsYWJlbE1lc3NhZ2VzIH0gZnJvbSAnLi8uLi9sYWJlbHMnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQvZXZlbnQuc2VydmljZSdcbmltcG9ydCB7IFRpbWV6b25lQ2FsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGltZXpvbmUvdGltZXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RhdGEtcmVxdWVzdC9kYXRhLXJlcXVlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWNvdmVyLWV2ZW50LWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Zlci1ldmVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3Zlci1ldmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3ZlckV2ZW50RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZXZlbnREZXRhaWxJdGVtOiBhbnk7XG4gIEBJbnB1dCgpIHVzZXJEYXRhOiBzdHJpbmc7XG4gIGlzT3duZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBsYWJlbE1lc3NhZ2VzID0gbGFiZWxNZXNzYWdlcztcbiAgZVN0YXJ0OiBhbnk7XG4gIGVFbmQ6IGFueTtcbiAgaXNFbnJvbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBpdGVtczogYW55O1xuICB0aW1lem9uZXNob3J0IDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXG4gICAgcHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHRpbWV6b25lQ2FsOiBUaW1lem9uZUNhbCxcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gIH1cbiAgQE91dHB1dCgpIHJldGlyZUV2ZW50SWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmRhdGFTZXJ2aWNlLmdldCh7dXJsIDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJ30pLnN1YnNjcmliZShyZXNwb25zZSA9PiBcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coe3Jlc3BvbnNlfSk7XG4gICAgLy8gICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICB0aGlzLmlzT3duZXIgPSAodGhpcy5ldmVudERldGFpbEl0ZW0ub3duZXIgPT0gdGhpcy51c2VyRGF0YSkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgIHRoaXMudGltZXpvbmVzaG9ydCA9IHRoaXMudGltZXpvbmVDYWwudGltZVpvbmVBYmJyZXZpYXRlZCgpO1xuICAgICAgdGhpcy5zZXREYXRlVGltZU9uQ292ZXIoKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmb3Igc2hvdyBEYXRlIFRpbWUgYXMgcGVyIHRpbWV6b25lXG4gICAqL1xuICBzZXREYXRlVGltZU9uQ292ZXIoKSB7XG4gICAgdGhpcy5lU3RhcnQgPSAodGhpcy50aW1lem9uZUNhbC5jYWxjVGltZSh0aGlzLmV2ZW50RGV0YWlsSXRlbS5zdGFydERhdGUsIHRoaXMuZXZlbnREZXRhaWxJdGVtLnN0YXJ0VGltZSkpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgdGhpcy5lRW5kID0gKHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5ldmVudERldGFpbEl0ZW0uZW5kRGF0ZSwgdGhpcy5ldmVudERldGFpbEl0ZW0uZW5kVGltZSkpLnRvTG9jYWxlU3RyaW5nKCk7XG4gIH1cblxuICB1cGF0ZShpZGVudGlmaWVyLCB2ZXJzaW9uS2V5KSB7XG4gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2V2ZW50LXBvc3QnXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdmVyc2lvbktleTogdmVyc2lvbktleVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIFxuICByZXRpcmVFdmVudChpZGVudGlmaWVyOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJldGlyZUV2ZW50SWQuZW1pdChpZGVudGlmaWVyKTtcbiAgfVxuXG59XG4iXX0=