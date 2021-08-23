/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event/event.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataService } from '../data-request/data-request.service';
import { UserConfigService } from '../userConfig/user-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "../data-request/data-request.service";
var EventService = /** @class */ (function () {
    function EventService(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.isEnroll = false;
    }
    /**
     * To user enrolled event list
     */
    /**
     * To user enrolled event list
     * @param {?} courseId
     * @param {?} userId
     * @return {?}
     */
    EventService.prototype.getEnrollEvents = /**
     * To user enrolled event list
     * @param {?} courseId
     * @param {?} userId
     * @return {?}
     */
    function (courseId, userId) {
        /** @type {?} */
        var req = {
            url: this.userConfigService.getConfigUrl().enrollListApi
        };
        return this.dataService.get(req);
    };
    /**
     * For Enroll/Unenroll to the event
     */
    /**
     * For Enroll/Unenroll to the event
     * @param {?} action
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    EventService.prototype.enrollToEventPost = /**
     * For Enroll/Unenroll to the event
     * @param {?} action
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    function (action, cId, uId) {
        /** @type {?} */
        var requestBody = {
            request: {
                "courseId": cId,
                "userId": uId,
                "fixedBatchId": "event_batch_id"
            }
        };
        /** @type {?} */
        var req = {
            url: this.userConfigService.getConfigUrl().enrollApi,
            data: requestBody
        };
        return this.dataService.post(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log("Result = ", data);
        }));
    };
    EventService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventService.ctorParameters = function () { return [
        { type: UserConfigService },
        { type: DataService }
    ]; };
    /** @nocollapse */ EventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: EventService, providedIn: "root" });
    return EventService;
}());
export { EventService };
if (false) {
    /** @type {?} */
    EventService.prototype.isEnroll;
    /** @type {?} */
    EventService.prototype.items;
    /**
     * @type {?}
     * @private
     */
    EventService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventService.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFHdEU7SUFNRSxzQkFDVSxpQkFBb0MsRUFDcEMsV0FBd0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpsQyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBSzFCLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNILHNDQUFlOzs7Ozs7SUFBZixVQUFnQixRQUFRLEVBQUUsTUFBTTs7WUFFeEIsR0FBRyxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhO1NBQ3pEO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7O0lBQ0gsd0NBQWlCOzs7Ozs7O0lBQWpCLFVBQWtCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRzs7WUFDMUIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsR0FBRztnQkFDZixRQUFRLEVBQUUsR0FBRztnQkFDYixjQUFjLEVBQUUsZ0JBQWdCO2FBQ2pDO1NBQ0Y7O1lBRUssR0FBRyxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTO1lBQ3BELElBQUksRUFBRSxXQUFXO1NBRWxCO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFJO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBNUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsaUJBQWlCO2dCQURqQixXQUFXOzs7dUJBRHBCO0NBbURDLEFBOUNELElBOENDO1NBM0NZLFlBQVk7OztJQUN2QixnQ0FBMEI7O0lBQzFCLDZCQUFXOzs7OztJQUVULHlDQUE0Qzs7Ozs7SUFDNUMsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gIGlzRW5yb2xsOiBib29sZWFuID0gZmFsc2U7XG4gIGl0ZW1zOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogVG8gdXNlciBlbnJvbGxlZCBldmVudCBsaXN0XG4gICAqL1xuICBnZXRFbnJvbGxFdmVudHMoY291cnNlSWQsIHVzZXJJZCkge1xuXG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLmVucm9sbExpc3RBcGlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0KHJlcSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIEVucm9sbC9VbmVucm9sbCB0byB0aGUgZXZlbnRcbiAgICovXG4gIGVucm9sbFRvRXZlbnRQb3N0KGFjdGlvbiwgY0lkLCB1SWQpIHtcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgXCJjb3Vyc2VJZFwiOiBjSWQsXG4gICAgICAgIFwidXNlcklkXCI6IHVJZCxcbiAgICAgICAgXCJmaXhlZEJhdGNoSWRcIjogXCJldmVudF9iYXRjaF9pZFwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5lbnJvbGxBcGksXG4gICAgICBkYXRhOiByZXF1ZXN0Qm9keVxuXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBvc3QocmVxKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0ID0gXCIsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG4iXX0=