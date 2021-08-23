/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/join-event-button/join-event-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { EventService } from '../../services/event/event.service';
export class JoinEventComponent {
    /**
     * @param {?} eventService
     * @param {?} timezoneCal
     */
    constructor(eventService, timezoneCal) {
        this.eventService = eventService;
        this.timezoneCal = timezoneCal;
        this.canUnenroll = true;
        this.isUserAbleToJoin = false;
        this.isEnrolled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isEnrollEvent();
        }), 1000);
        setInterval((/**
         * @return {?}
         */
        () => {
            this.joinEvent();
        }), 1000);
    }
    /**
     * For validate and show/hide join button
     * @return {?}
     */
    joinEvent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.today = new Date();
            this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
            this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();
            /** @type {?} */
            var todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
            /** @type {?} */
            var startEventTime = yield this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime);
            /** @type {?} */
            var startDifference = startEventTime.getTime() - todayDateTime.getTime();
            /** @type {?} */
            var startInMinutes = Math.round(startDifference / 60000);
            /** @type {?} */
            var endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);
            /** @type {?} */
            var endDifference = todayDateTime.getTime() - endEventTime.getTime();
            /** @type {?} */
            var endInMinutes = Math.round(endDifference / 60000);
            this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;
        });
    }
    /**
     * For check user is enrolled or not
     * @return {?}
     */
    isEnrollEvent() {
        this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.items = data.result.courses;
            this.items.find((/**
             * @param {?} o
             * @param {?} i
             * @return {?}
             */
            (o, i) => {
                if (o.courseId === this.eventDetailItem.identifier) {
                    this.isEnrolled = true;
                }
            }));
        }));
    }
    /**
     * Enroll/Unenroll event
     *
     * @param {?} action enroll/unenroll
     * @return {?}
     */
    enrollToEvent(action) {
        this.eventService.enrollToEventPost(action, this.eventDetailItem.code, this.userData);
    }
    /**
     * For join attain event
     *
     * @param {?} joinLink event join url
     * @return {?}
     */
    openProviderLink(joinLink) {
        window.open(joinLink, "_blank");
    }
}
JoinEventComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-join-event-button',
                template: "<div class=\"d-flex mt-20\">\n    <div class=\"wl-30\"></div>\n    \n    <div  class=\"w-50 d-flex  join-btn my-12\">\n        <button *ngIf=\"isUserAbleToJoin && isEnrolled\" type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary w-50 sb-btn-normal mr-12 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n        <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn w-50 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n        <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"w-50 sb-btn sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n    </div>\n\n\n    <!-- <table>\n        <tr>\n            <td>\n                <button type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary  sb-btn-normal w-100  mt-20 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n\n            </td>\n            <td *ngIf=\"canUnenroll\">\n                <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary  w-100 sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n                <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"sb-btn w-100 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n            </td>\n        </tr>\n    </table> -->\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
JoinEventComponent.ctorParameters = () => [
    { type: EventService },
    { type: TimezoneCal }
];
JoinEventComponent.propDecorators = {
    eventDetailItem: [{ type: Input }],
    userData: [{ type: Input }],
    canUnenroll: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    JoinEventComponent.prototype.eventDetailItem;
    /** @type {?} */
    JoinEventComponent.prototype.userData;
    /** @type {?} */
    JoinEventComponent.prototype.canUnenroll;
    /** @type {?} */
    JoinEventComponent.prototype.todayDateTime;
    /** @type {?} */
    JoinEventComponent.prototype.isUserAbleToJoin;
    /** @type {?} */
    JoinEventComponent.prototype.isEnrolled;
    /** @type {?} */
    JoinEventComponent.prototype.today;
    /** @type {?} */
    JoinEventComponent.prototype.todayDate;
    /** @type {?} */
    JoinEventComponent.prototype.todayTime;
    /** @type {?} */
    JoinEventComponent.prototype.startInMinutes;
    /** @type {?} */
    JoinEventComponent.prototype.items;
    /**
     * @type {?}
     * @private
     */
    JoinEventComponent.prototype.eventService;
    /**
     * @type {?}
     * @private
     */
    JoinEventComponent.prototype.timezoneCal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi1ldmVudC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzL2NvbXBvbmVudHMvam9pbi1ldmVudC1idXR0b24vam9pbi1ldmVudC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFRakUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFlN0IsWUFDVSxZQUEwQixFQUMxQixXQUF3QjtRQUR4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWR6QixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUlyQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsZUFBVSxHQUFZLEtBQUssQ0FBQztJQVc1QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV2QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxXQUFXOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7SUFNSyxTQUFTOztZQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENB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Qjs7SUFDbkIsOENBQWtDOztJQUNsQyx3Q0FBNEI7O0lBQzVCLG1DQUFXOztJQUNYLHVDQUFlOztJQUNmLHVDQUFlOztJQUNmLDRDQUFvQjs7SUFDcEIsbUNBQVc7Ozs7O0lBR1QsMENBQWtDOzs7OztJQUNsQyx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpbWV6b25lQ2FsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGltZXpvbmUvdGltZXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC9ldmVudC5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzYi1qb2luLWV2ZW50LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9qb2luLWV2ZW50LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2pvaW4tZXZlbnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBKb2luRXZlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBldmVudERldGFpbEl0ZW06IGFueTtcbiAgQElucHV0KCkgdXNlckRhdGE6IHN0cmluZztcbiAgQElucHV0KCkgY2FuVW5lbnJvbGw6IGJvb2xlYW4gPSB0cnVlO1xuXG5cbiAgdG9kYXlEYXRlVGltZTogYW55O1xuICBpc1VzZXJBYmxlVG9Kb2luOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRW5yb2xsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9kYXk6IGFueTtcbiAgdG9kYXlEYXRlOiBhbnk7XG4gIHRvZGF5VGltZTogYW55O1xuICBzdGFydEluTWludXRlczogYW55O1xuICBpdGVtczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aW1lem9uZUNhbDogVGltZXpvbmVDYWxcbiAgICAgICAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaXNFbnJvbGxFdmVudCgpO1xuXG4gICAgfSwgMTAwMCk7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmpvaW5FdmVudCgpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cblxuICAvKipcbiAgICogRm9yIHZhbGlkYXRlIGFuZCBzaG93L2hpZGUgam9pbiBidXR0b25cbiAgICovXG4gIGFzeW5jIGpvaW5FdmVudCgpIHtcblxuICAgIHRoaXMudG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudG9kYXlEYXRlID0gdGhpcy50b2RheS5nZXRGdWxsWWVhcigpICsgJy0nICsgKCcwJyArICh0aGlzLnRvZGF5LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgJy0nICsgKCcwJyArIHRoaXMudG9kYXkuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgdGhpcy50b2RheVRpbWUgPSB0aGlzLnRvZGF5LmdldEhvdXJzKCkgKyBcIjpcIiArIHRoaXMudG9kYXkuZ2V0TWludXRlcygpO1xuXG5cbiAgICB2YXIgdG9kYXlEYXRlVGltZSA9IHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy50b2RheURhdGUsIHRoaXMudG9kYXlUaW1lKTtcbiAgICB2YXIgc3RhcnRFdmVudFRpbWUgPSBhd2FpdCB0aGlzLnRpbWV6b25lQ2FsLmNhbGNUaW1lKHRoaXMuZXZlbnREZXRhaWxJdGVtLnN0YXJ0RGF0ZSwgdGhpcy5ldmVudERldGFpbEl0ZW0uc3RhcnRUaW1lKTtcblxuICAgIHZhciBzdGFydERpZmZlcmVuY2UgPSBzdGFydEV2ZW50VGltZS5nZXRUaW1lKCkgLSB0b2RheURhdGVUaW1lLmdldFRpbWUoKTtcbiAgICB2YXIgc3RhcnRJbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKHN0YXJ0RGlmZmVyZW5jZSAvIDYwMDAwKTtcblxuICAgIHZhciBlbmRFdmVudFRpbWUgPSB0aGlzLnRpbWV6b25lQ2FsLmNhbGNUaW1lKHRoaXMuZXZlbnREZXRhaWxJdGVtLmVuZERhdGUsIHRoaXMuZXZlbnREZXRhaWxJdGVtLmVuZFRpbWUpO1xuXG4gICAgdmFyIGVuZERpZmZlcmVuY2UgPSB0b2RheURhdGVUaW1lLmdldFRpbWUoKSAtIGVuZEV2ZW50VGltZS5nZXRUaW1lKCk7XG4gICAgdmFyIGVuZEluTWludXRlcyA9IE1hdGgucm91bmQoZW5kRGlmZmVyZW5jZSAvIDYwMDAwKTtcbiAgICB0aGlzLmlzVXNlckFibGVUb0pvaW4gPSAoc3RhcnRJbk1pbnV0ZXMgPD0gMTAgJiYgZW5kSW5NaW51dGVzIDwgMCkgPyB0cnVlIDogZmFsc2U7XG5cbiAgfVxuXG4gIC8qKlxuICAgICogRm9yIGNoZWNrIHVzZXIgaXMgZW5yb2xsZWQgb3Igbm90XG4gICAgKiBAcGFyYW0gY291cnNlSWQgRXZlbnQgaWRcbiAgICAqIEBwYXJhbSB1c2VySWQgTG9nLWluIHVzZXIgSWQgXG4gICAgKi9cbiAgaXNFbnJvbGxFdmVudCgpIHtcbiAgICB0aGlzLmV2ZW50U2VydmljZS5nZXRFbnJvbGxFdmVudHModGhpcy5ldmVudERldGFpbEl0ZW0uaWRlbnRpZmllciwgdGhpcy51c2VyRGF0YSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLml0ZW1zID0gZGF0YS5yZXN1bHQuY291cnNlcztcblxuICAgICAgdGhpcy5pdGVtcy5maW5kKChvLCBpKSA9PiB7XG4gICAgICAgIGlmIChvLmNvdXJzZUlkID09PSB0aGlzLmV2ZW50RGV0YWlsSXRlbS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgdGhpcy5pc0Vucm9sbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gICAgLyoqXG4gICAqIEVucm9sbC9VbmVucm9sbCBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIGFjdGlvbiBlbnJvbGwvdW5lbnJvbGwgXG4gICAqL1xuICAgICBlbnJvbGxUb0V2ZW50KGFjdGlvbikge1xuICAgICAgdGhpcy5ldmVudFNlcnZpY2UuZW5yb2xsVG9FdmVudFBvc3QoYWN0aW9uLCB0aGlzLmV2ZW50RGV0YWlsSXRlbS5jb2RlLCB0aGlzLnVzZXJEYXRhKTtcbiAgICB9XG5cbiAgLyoqXG4gICAqIEZvciBqb2luIGF0dGFpbiBldmVudFxuICAgKiBcbiAgICogQHBhcmFtIGpvaW5MaW5rIGV2ZW50IGpvaW4gdXJsXG4gICAqL1xuICBvcGVuUHJvdmlkZXJMaW5rKGpvaW5MaW5rKSB7XG4gICAgd2luZG93Lm9wZW4oam9pbkxpbmssIFwiX2JsYW5rXCIpO1xuICB9XG59XG4iXX0=