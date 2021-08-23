/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/join-event-button/join-event-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
import { EventService } from '../../services/event/event.service';
var JoinEventComponent = /** @class */ (function () {
    function JoinEventComponent(eventService, timezoneCal) {
        this.eventService = eventService;
        this.timezoneCal = timezoneCal;
        this.canUnenroll = true;
        this.isUserAbleToJoin = false;
        this.isEnrolled = false;
    }
    /**
     * @return {?}
     */
    JoinEventComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.isEnrollEvent();
        }), 1000);
        setInterval((/**
         * @return {?}
         */
        function () {
            _this.joinEvent();
        }), 1000);
    };
    /**
     * For validate and show/hide join button
     */
    /**
     * For validate and show/hide join button
     * @return {?}
     */
    JoinEventComponent.prototype.joinEvent = /**
     * For validate and show/hide join button
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var todayDateTime, startEventTime, startDifference, startInMinutes, endEventTime, endDifference, endInMinutes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.today = new Date();
                        this.todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + this.today.getDate()).slice(-2);
                        this.todayTime = this.today.getHours() + ":" + this.today.getMinutes();
                        todayDateTime = this.timezoneCal.calcTime(this.todayDate, this.todayTime);
                        return [4 /*yield*/, this.timezoneCal.calcTime(this.eventDetailItem.startDate, this.eventDetailItem.startTime)];
                    case 1:
                        startEventTime = _a.sent();
                        startDifference = startEventTime.getTime() - todayDateTime.getTime();
                        startInMinutes = Math.round(startDifference / 60000);
                        endEventTime = this.timezoneCal.calcTime(this.eventDetailItem.endDate, this.eventDetailItem.endTime);
                        endDifference = todayDateTime.getTime() - endEventTime.getTime();
                        endInMinutes = Math.round(endDifference / 60000);
                        this.isUserAbleToJoin = (startInMinutes <= 10 && endInMinutes < 0) ? true : false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
      * For check user is enrolled or not
      * @param courseId Event id
      * @param userId Log-in user Id
      */
    /**
     * For check user is enrolled or not
     * @return {?}
     */
    JoinEventComponent.prototype.isEnrollEvent = /**
     * For check user is enrolled or not
     * @return {?}
     */
    function () {
        var _this = this;
        this.eventService.getEnrollEvents(this.eventDetailItem.identifier, this.userData).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.items = data.result.courses;
            _this.items.find((/**
             * @param {?} o
             * @param {?} i
             * @return {?}
             */
            function (o, i) {
                if (o.courseId === _this.eventDetailItem.identifier) {
                    _this.isEnrolled = true;
                }
            }));
        }));
    };
    /**
   * Enroll/Unenroll event
   *
   * @param action enroll/unenroll
   */
    /**
     * Enroll/Unenroll event
     *
     * @param {?} action enroll/unenroll
     * @return {?}
     */
    JoinEventComponent.prototype.enrollToEvent = /**
     * Enroll/Unenroll event
     *
     * @param {?} action enroll/unenroll
     * @return {?}
     */
    function (action) {
        this.eventService.enrollToEventPost(action, this.eventDetailItem.code, this.userData);
    };
    /**
     * For join attain event
     *
     * @param joinLink event join url
     */
    /**
     * For join attain event
     *
     * @param {?} joinLink event join url
     * @return {?}
     */
    JoinEventComponent.prototype.openProviderLink = /**
     * For join attain event
     *
     * @param {?} joinLink event join url
     * @return {?}
     */
    function (joinLink) {
        window.open(joinLink, "_blank");
    };
    JoinEventComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-join-event-button',
                    template: "<div class=\"d-flex mt-20\">\n    <div class=\"wl-30\"></div>\n    \n    <div  class=\"w-50 d-flex  join-btn my-12\">\n        <button *ngIf=\"isUserAbleToJoin && isEnrolled\" type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary w-50 sb-btn-normal mr-12 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n        <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn w-50 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n        <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"w-50 sb-btn sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n    </div>\n\n\n    <!-- <table>\n        <tr>\n            <td>\n                <button type=\"button \" class=\"sb-custom-btn sb-btn sb-btn-secondary  sb-btn-normal w-100  mt-20 ml-auto\" (click)=\"openProviderLink(eventDetailItem?.onlineProviderData); \">{{'join' | translate}}</button>\n\n            </td>\n            <td *ngIf=\"canUnenroll\">\n                <button type=\"button\" *ngIf=\"!isEnrolled\" class=\"sb-btn sb-btn-primary  w-100 sb-btn-normal\" (click)=\"enrollToEvent('enroll');\">{{'enroll' | translate}}</button>\n                <button type=\"button\" *ngIf=\"isEnrolled && canUnenroll\" class=\"sb-btn w-100 sb-btn-primary  sb-btn-normal\" (click)=\"enrollToEvent('unenroll');\">{{'unenroll' | translate}}</button>\n\n            </td>\n        </tr>\n    </table> -->\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    JoinEventComponent.ctorParameters = function () { return [
        { type: EventService },
        { type: TimezoneCal }
    ]; };
    JoinEventComponent.propDecorators = {
        eventDetailItem: [{ type: Input }],
        userData: [{ type: Input }],
        canUnenroll: [{ type: Input }]
    };
    return JoinEventComponent;
}());
export { JoinEventComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi1ldmVudC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzL2NvbXBvbmVudHMvam9pbi1ldmVudC1idXR0b24vam9pbi1ldmVudC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFFakU7SUFxQkUsNEJBQ1UsWUFBMEIsRUFDMUIsV0FBd0I7UUFEeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFkekIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFJckMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFXNUIsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFdkIsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsV0FBVzs7O1FBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdEOztPQUVHOzs7OztJQUNHLHNDQUFTOzs7O0lBQWY7Ozs7Ozt3QkFFRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdB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SzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7O0lBeUZSLHlCQUFDO0NBQUEsQUFsR0QsSUFrR0M7U0E1Rlksa0JBQWtCOzs7SUFDN0IsNkNBQThCOztJQUM5QixzQ0FBMEI7O0lBQzFCLHlDQUFxQzs7SUFHckMsMkNBQW1COztJQUNuQiw4Q0FBa0M7O0lBQ2xDLHdDQUE0Qjs7SUFDNUIsbUNBQVc7O0lBQ1gsdUNBQWU7O0lBQ2YsdUNBQWU7O0lBQ2YsNENBQW9COztJQUNwQixtQ0FBVzs7Ozs7SUFHVCwwQ0FBa0M7Ozs7O0lBQ2xDLHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZXpvbmVDYWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aW1lem9uZS90aW1lem9uZS5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50L2V2ZW50LnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NiLWpvaW4tZXZlbnQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2pvaW4tZXZlbnQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vam9pbi1ldmVudC1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEpvaW5FdmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGV2ZW50RGV0YWlsSXRlbTogYW55O1xuICBASW5wdXQoKSB1c2VyRGF0YTogc3RyaW5nO1xuICBASW5wdXQoKSBjYW5VbmVucm9sbDogYm9vbGVhbiA9IHRydWU7XG5cblxuICB0b2RheURhdGVUaW1lOiBhbnk7XG4gIGlzVXNlckFibGVUb0pvaW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFbnJvbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICB0b2RheTogYW55O1xuICB0b2RheURhdGU6IGFueTtcbiAgdG9kYXlUaW1lOiBhbnk7XG4gIHN0YXJ0SW5NaW51dGVzOiBhbnk7XG4gIGl0ZW1zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZSxcbiAgICBwcml2YXRlIHRpbWV6b25lQ2FsOiBUaW1lem9uZUNhbFxuICAgICAgICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pc0Vucm9sbEV2ZW50KCk7XG5cbiAgICB9LCAxMDAwKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuam9pbkV2ZW50KCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGb3IgdmFsaWRhdGUgYW5kIHNob3cvaGlkZSBqb2luIGJ1dHRvblxuICAgKi9cbiAgYXN5bmMgam9pbkV2ZW50KCkge1xuXG4gICAgdGhpcy50b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50b2RheURhdGUgPSB0aGlzLnRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyAoJzAnICsgKHRoaXMudG9kYXkuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgKyAnLScgKyAoJzAnICsgdGhpcy50b2RheS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgICB0aGlzLnRvZGF5VGltZSA9IHRoaXMudG9kYXkuZ2V0SG91cnMoKSArIFwiOlwiICsgdGhpcy50b2RheS5nZXRNaW51dGVzKCk7XG5cblxuICAgIHZhciB0b2RheURhdGVUaW1lID0gdGhpcy50aW1lem9uZUNhbC5jYWxjVGltZSh0aGlzLnRvZGF5RGF0ZSwgdGhpcy50b2RheVRpbWUpO1xuICAgIHZhciBzdGFydEV2ZW50VGltZSA9IGF3YWl0IHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5ldmVudERldGFpbEl0ZW0uc3RhcnREYXRlLCB0aGlzLmV2ZW50RGV0YWlsSXRlbS5zdGFydFRpbWUpO1xuXG4gICAgdmFyIHN0YXJ0RGlmZmVyZW5jZSA9IHN0YXJ0RXZlbnRUaW1lLmdldFRpbWUoKSAtIHRvZGF5RGF0ZVRpbWUuZ2V0VGltZSgpO1xuICAgIHZhciBzdGFydEluTWludXRlcyA9IE1hdGgucm91bmQoc3RhcnREaWZmZXJlbmNlIC8gNjAwMDApO1xuXG4gICAgdmFyIGVuZEV2ZW50VGltZSA9IHRoaXMudGltZXpvbmVDYWwuY2FsY1RpbWUodGhpcy5ldmVudERldGFpbEl0ZW0uZW5kRGF0ZSwgdGhpcy5ldmVudERldGFpbEl0ZW0uZW5kVGltZSk7XG5cbiAgICB2YXIgZW5kRGlmZmVyZW5jZSA9IHRvZGF5RGF0ZVRpbWUuZ2V0VGltZSgpIC0gZW5kRXZlbnRUaW1lLmdldFRpbWUoKTtcbiAgICB2YXIgZW5kSW5NaW51dGVzID0gTWF0aC5yb3VuZChlbmREaWZmZXJlbmNlIC8gNjAwMDApO1xuICAgIHRoaXMuaXNVc2VyQWJsZVRvSm9pbiA9IChzdGFydEluTWludXRlcyA8PSAxMCAmJiBlbmRJbk1pbnV0ZXMgPCAwKSA/IHRydWUgOiBmYWxzZTtcblxuICB9XG5cbiAgLyoqXG4gICAgKiBGb3IgY2hlY2sgdXNlciBpcyBlbnJvbGxlZCBvciBub3RcbiAgICAqIEBwYXJhbSBjb3Vyc2VJZCBFdmVudCBpZFxuICAgICogQHBhcmFtIHVzZXJJZCBMb2ctaW4gdXNlciBJZCBcbiAgICAqL1xuICBpc0Vucm9sbEV2ZW50KCkge1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLmdldEVucm9sbEV2ZW50cyh0aGlzLmV2ZW50RGV0YWlsSXRlbS5pZGVudGlmaWVyLCB0aGlzLnVzZXJEYXRhKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSBkYXRhLnJlc3VsdC5jb3Vyc2VzO1xuXG4gICAgICB0aGlzLml0ZW1zLmZpbmQoKG8sIGkpID0+IHtcbiAgICAgICAgaWYgKG8uY291cnNlSWQgPT09IHRoaXMuZXZlbnREZXRhaWxJdGVtLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICB0aGlzLmlzRW5yb2xsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgICAvKipcbiAgICogRW5yb2xsL1VuZW5yb2xsIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0gYWN0aW9uIGVucm9sbC91bmVucm9sbCBcbiAgICovXG4gICAgIGVucm9sbFRvRXZlbnQoYWN0aW9uKSB7XG4gICAgICB0aGlzLmV2ZW50U2VydmljZS5lbnJvbGxUb0V2ZW50UG9zdChhY3Rpb24sIHRoaXMuZXZlbnREZXRhaWxJdGVtLmNvZGUsIHRoaXMudXNlckRhdGEpO1xuICAgIH1cblxuICAvKipcbiAgICogRm9yIGpvaW4gYXR0YWluIGV2ZW50XG4gICAqIFxuICAgKiBAcGFyYW0gam9pbkxpbmsgZXZlbnQgam9pbiB1cmxcbiAgICovXG4gIG9wZW5Qcm92aWRlckxpbmsoam9pbkxpbmspIHtcbiAgICB3aW5kb3cub3Blbihqb2luTGluaywgXCJfYmxhbmtcIik7XG4gIH1cbn1cbiJdfQ==