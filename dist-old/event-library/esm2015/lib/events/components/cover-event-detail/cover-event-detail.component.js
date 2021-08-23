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
export class CoverEventDetailComponent {
    /**
     * @param {?} router
     * @param {?} eventService
     * @param {?} timezoneCal
     * @param {?} dataService
     * @param {?} translate
     */
    constructor(router, eventService, timezoneCal, dataService, translate) {
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
    ngOnInit() {
        // this.dataService.get({url : 'https://jsonplaceholder.typicode.com/todos/1'}).subscribe(response => 
        //   {
        //     console.log({response});
        //   });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isOwner = (this.eventDetailItem.owner == this.userData) ? true : false;
            this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
            this.setDateTimeOnCover();
        }), 1000);
    }
    /**
     * for show Date Time as per timezone
     * @return {?}
     */
    setDateTimeOnCover() {
        this.eStart = (this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)).toLocaleString();
        this.eEnd = (this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime)).toLocaleString();
    }
    /**
     * @param {?} identifier
     * @param {?} versionKey
     * @return {?}
     */
    upate(identifier, versionKey) {
        this.router.navigate(['/event-post'], {
            queryParams: {
                identifier: identifier,
                versionKey: versionKey
            }
        });
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    retireEvent(identifier) {
        this.retireEventId.emit(identifier);
    }
}
CoverEventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-cover-event-detail',
                template: "<div>\n    <div class=\"d-flex sb-bg-color-gray-0 w-100\">\n        <img class=\"w-30 coverImg\" *ngIf=\"eventDetailItem?.posterImage\" src=\"{{eventDetailItem?.posterImage}}\" />\n        <img class=\"w-30 coverImg\" *ngIf=\"!eventDetailItem?.posterImage\" src=\"./assets/images/eventcover.jpg\" />\n\n\n        <div class=\"ml-20\">\n            <h2 class=\"fs-1.3\">{{eventDetailItem?.name}}</h2>\n            <!-- <span>{{'by' | translate}} {{eventDetailItem?.owner}}</span> -->\n\n            <div class=\"mt-12\" *ngIf=\"eStart\">\n                <div>\n                    <i class=\"fa fa-calendar fs-1\"></i> <span class=\"fs-0-92\"> &nbsp; {{eStart}} - {{eEnd}} ({{timezoneshort}})</span>\n                </div>\n\n                <div *ngIf=\"isOwner\">\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-primary sb-btn-normal ripple mt-20 mr-12 w-30\" (click)=\"upate(eventDetailItem?.identifier, eventDetailItem?.versionKey);\">{{'edit' | translate}}</button>\n                    <button type=\"button\" class=\"sb-btn sb-btn-outline-error sb-btn-normal ripple mt-10 mr-12 w-30\" (click)=\"retireEvent(eventDetailItem?.identifier);\">{{'retire' | translate}}</button>\n\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 mr-12\" (click)=\"upate(eventDetailItem.identifier);\">{{'edit' | translate}}</button> -->\n                    <!-- <button type=\"button\" class=\"sb-btn sb-btn-primary sb-btn-normal  mt-10 mr-12\" (click)=\"retireEvent(eventDetailItem.identifier);\">{{'retire' | translate}}</button> -->\n                    <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n                    <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n\n                </div>\n            </div>\n            <!-- <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('enroll');\">Enroll</button>\n            <button type=\"button\" *ngIf=\"isEnrolled\" class=\"sb-btn sb-btn-primary sb-btn-normal mt-20 ml-auto\" (click)=\"enrollToEvent('unenroll');\">Unenroll</button> -->\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Online'\" class=\"sb-label-status sb-label-status-success ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'Offline'\" class=\"sb-label-status sb-label-status-error ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-error\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n        <div *ngIf=\"eventDetailItem?.eventType == 'OnlineAndOffline'\" class=\"sb-label-status sb-label-primary-100 ml-auto mr-20 p-12 mt-10\">\n            <span class=\"sb-label-status-indicator sb-label-status-indicator-primary\"></span><span class=\"text-capitalize \">{{eventDetailItem?.eventType}}</span>\n        </div>\n\n    </div>\n</div>",
                styles: [".coverImg{-o-object-fit:cover;object-fit:cover}"]
            }] }
];
/** @nocollapse */
CoverEventDetailComponent.ctorParameters = () => [
    { type: Router },
    { type: EventService },
    { type: TimezoneCal },
    { type: DataService },
    { type: TranslateService }
];
CoverEventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    retireEventId: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292ZXItZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2NvdmVyLWV2ZW50LWRldGFpbC9jb3Zlci1ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFHLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU92RCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7OztJQVVwQyxZQUNVLE1BQWEsRUFDYixZQUEwQixFQUMxQixXQUF3QixFQUN4QixXQUF3QixFQUN6QixTQUEyQjtRQUoxQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFacEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUc5QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBVWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQURyRCxDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLHNHQUFzRztRQUN0RyxNQUFNO1FBQ04sK0JBQStCO1FBQy9CLFFBQVE7UUFFUixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUUzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNILElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkgsQ0FBQzs7Ozs7O0lBRUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDckMsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixVQUFVLEVBQUUsVUFBVTthQUN2QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQXpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsazBHQUFrRDs7YUFFbkQ7Ozs7WUFYUSxNQUFNO1lBRU4sWUFBWTtZQUNaLFdBQVc7WUFDWCxXQUFXO1lBQ1gsZ0JBQWdCOzs7OEJBUXRCLEtBQUs7dUJBQ0wsS0FBSzs0QkFlTCxNQUFNOzs7O0lBaEJQLG9EQUE4Qjs7SUFDOUIsNkNBQTBCOztJQUMxQiw0Q0FBd0I7O0lBQ3hCLGtEQUE4Qjs7SUFDOUIsMkNBQVk7O0lBQ1oseUNBQVU7O0lBQ1YsK0NBQTRCOztJQUM1QiwwQ0FBVzs7SUFDWCxrREFBdUI7O0lBUXZCLGtEQUFxRDs7Ozs7SUFObkQsMkNBQXFCOzs7OztJQUNyQixpREFBa0M7Ozs7O0lBQ2xDLGdEQUFnQzs7Ozs7SUFDaEMsZ0RBQWdDOztJQUNoQyw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCAsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydHsgbGFiZWxNZXNzYWdlcyB9IGZyb20gJy4vLi4vbGFiZWxzJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50L2V2ZW50LnNlcnZpY2UnXG5pbXBvcnQgeyBUaW1lem9uZUNhbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RpbWV6b25lL3RpbWV6b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1jb3Zlci1ldmVudC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY292ZXItZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY292ZXItZXZlbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ292ZXJFdmVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGV2ZW50RGV0YWlsSXRlbTogYW55O1xuICBASW5wdXQoKSB1c2VyRGF0YTogc3RyaW5nO1xuICBpc093bmVyOiBib29sZWFuID0gdHJ1ZTtcbiAgbGFiZWxNZXNzYWdlcyA9IGxhYmVsTWVzc2FnZXM7XG4gIGVTdGFydDogYW55O1xuICBlRW5kOiBhbnk7XG4gIGlzRW5yb2xsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXRlbXM6IGFueTtcbiAgdGltZXpvbmVzaG9ydCA6IHN0cmluZztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxuICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aW1lem9uZUNhbDogVGltZXpvbmVDYWwsXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICB9XG4gIEBPdXRwdXQoKSByZXRpcmVFdmVudElkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5kYXRhU2VydmljZS5nZXQoe3VybCA6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMSd9KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHtyZXNwb25zZX0pO1xuICAgIC8vICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgdGhpcy5pc093bmVyID0gKHRoaXMuZXZlbnREZXRhaWxJdGVtLm93bmVyID09IHRoaXMudXNlckRhdGEpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICB0aGlzLnRpbWV6b25lc2hvcnQgPSB0aGlzLnRpbWV6b25lQ2FsLnRpbWVab25lQWJicmV2aWF0ZWQoKTtcbiAgICAgIHRoaXMuc2V0RGF0ZVRpbWVPbkNvdmVyKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogZm9yIHNob3cgRGF0ZSBUaW1lIGFzIHBlciB0aW1lem9uZVxuICAgKi9cbiAgc2V0RGF0ZVRpbWVPbkNvdmVyKCkge1xuICAgIHRoaXMuZVN0YXJ0ID0gKHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5ldmVudERldGFpbEl0ZW0uc3RhcnREYXRlLCB0aGlzLmV2ZW50RGV0YWlsSXRlbS5zdGFydFRpbWUpKS50b0xvY2FsZVN0cmluZygpO1xuICAgIHRoaXMuZUVuZCA9ICh0aGlzLnRpbWV6b25lQ2FsLmNhbGNUaW1lKHRoaXMuZXZlbnREZXRhaWxJdGVtLmVuZERhdGUsIHRoaXMuZXZlbnREZXRhaWxJdGVtLmVuZFRpbWUpKS50b0xvY2FsZVN0cmluZygpO1xuICB9XG5cbiAgdXBhdGUoaWRlbnRpZmllciwgdmVyc2lvbktleSkge1xuICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ldmVudC1wb3N0J10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHZlcnNpb25LZXk6IHZlcnNpb25LZXlcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgcmV0aXJlRXZlbnQoaWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXRpcmVFdmVudElkLmVtaXQoaWRlbnRpZmllcik7XG4gIH1cblxufVxuIl19