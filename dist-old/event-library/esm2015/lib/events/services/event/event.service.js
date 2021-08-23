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
export class EventService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.isEnroll = false;
    }
    /**
     * To user enrolled event list
     * @param {?} courseId
     * @param {?} userId
     * @return {?}
     */
    getEnrollEvents(courseId, userId) {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().enrollListApi
        };
        return this.dataService.get(req);
    }
    /**
     * For Enroll/Unenroll to the event
     * @param {?} action
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    enrollToEventPost(action, cId, uId) {
        /** @type {?} */
        const requestBody = {
            request: {
                "courseId": cId,
                "userId": uId,
                "fixedBatchId": "event_batch_id"
            }
        };
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().enrollApi,
            data: requestBody
        };
        return this.dataService.post(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log("Result = ", data);
        }));
    }
}
EventService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: EventService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFNdEUsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBR3ZCLFlBQ1UsaUJBQW9DLEVBQ3BDLFdBQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKbEMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUsxQixDQUFDOzs7Ozs7O0lBS0QsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNOztjQUV4QixHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWE7U0FDekQ7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7Ozs7O0lBS0QsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHOztjQUMxQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxnQkFBZ0I7YUFDakM7U0FDRjs7Y0FFSyxHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVM7WUFDcEQsSUFBSSxFQUFFLFdBQVc7U0FFbEI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNUNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLGlCQUFpQjtZQURqQixXQUFXOzs7OztJQVFsQixnQ0FBMEI7O0lBQzFCLDZCQUFXOzs7OztJQUVULHlDQUE0Qzs7Ozs7SUFDNUMsbUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gIGlzRW5yb2xsOiBib29sZWFuID0gZmFsc2U7XG4gIGl0ZW1zOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogVG8gdXNlciBlbnJvbGxlZCBldmVudCBsaXN0XG4gICAqL1xuICBnZXRFbnJvbGxFdmVudHMoY291cnNlSWQsIHVzZXJJZCkge1xuXG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLmVucm9sbExpc3RBcGlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0KHJlcSk7XG4gIH1cblxuICAvKipcbiAgICogRm9yIEVucm9sbC9VbmVucm9sbCB0byB0aGUgZXZlbnRcbiAgICovXG4gIGVucm9sbFRvRXZlbnRQb3N0KGFjdGlvbiwgY0lkLCB1SWQpIHtcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgXCJjb3Vyc2VJZFwiOiBjSWQsXG4gICAgICAgIFwidXNlcklkXCI6IHVJZCxcbiAgICAgICAgXCJmaXhlZEJhdGNoSWRcIjogXCJldmVudF9iYXRjaF9pZFwiXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5lbnJvbGxBcGksXG4gICAgICBkYXRhOiByZXF1ZXN0Qm9keVxuXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBvc3QocmVxKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0ID0gXCIsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuXG4iXX0=