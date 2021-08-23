/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-detail/event-detail.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "../data-request/data-request.service";
export class EventDetailService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event detail
     * @param {?} identifier
     * @return {?}
     */
    getEvent(identifier) {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().detail + identifier
        };
        return this.dataService.get(req);
    }
    /**
     * For enroll/unenroll user
     * @param {?} cId
     * @param {?} uId
     * @return {?}
     */
    enrollUser(cId, uId) {
        //param : cid and uid
        //let apiUrl = '' + this.eventLibraryService.userID;
        //return this.http.get<any>(apiUrl);
        //param : cid and uid
        //let apiUrl = '' + this.eventLibraryService.userID;
        //return this.http.get<any>(apiUrl);
        /** @type {?} */
        const requestBody = {
            request: {
                "courseId": cId,
                "userId": uId,
                "fixedBatchId": "event_batch_id"
            }
        };
    }
}
EventDetailService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventDetailService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventDetailService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventDetailService_Factory() { return new EventDetailService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: EventDetailService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventDetailService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventDetailService.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGV0YWlsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFLbkUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFN0IsWUFDVSxpQkFBb0MsRUFDcEMsV0FBd0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNsQyxDQUFDOzs7Ozs7SUFNRCxRQUFRLENBQUMsVUFBVTs7Y0FDWCxHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBSSxVQUFVO1NBQ2hFO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7O0lBTUQsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHO1FBQ2pCLHFCQUFxQjtRQUNyQixvREFBb0Q7UUFDcEQsb0NBQW9DOzs7OztjQUU5QixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGNBQWMsRUFBRSxnQkFBZ0I7YUFDakM7U0FDRjtJQUNILENBQUM7OztZQXRDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxpQkFBaUI7WUFDakIsV0FBVzs7Ozs7Ozs7SUFRaEIsK0NBQTRDOzs7OztJQUM1Qyx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRXZlbnREZXRhaWxJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWRldGFpbC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudERldGFpbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGb3IgZ2V0IGV2ZW50IGRldGFpbCBcbiAgICovXG4gIGdldEV2ZW50KGlkZW50aWZpZXIpIHtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICB1cmw6IHRoaXMudXNlckNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnVXJsKCkuZGV0YWlsICArIGlkZW50aWZpZXJcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0KHJlcSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGb3IgZW5yb2xsL3VuZW5yb2xsIHVzZXJcbiAgICovXG4gIGVucm9sbFVzZXIoY0lkLCB1SWQpIHtcbiAgICAvL3BhcmFtIDogY2lkIGFuZCB1aWRcbiAgICAvL2xldCBhcGlVcmwgPSAnJyArIHRoaXMuZXZlbnRMaWJyYXJ5U2VydmljZS51c2VySUQ7XG4gICAgLy9yZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGFwaVVybCk7XG5cbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgXCJjb3Vyc2VJZFwiOiBjSWQsXG4gICAgICAgIFwidXNlcklkXCI6IHVJZCxcbiAgICAgICAgXCJmaXhlZEJhdGNoSWRcIjogXCJldmVudF9iYXRjaF9pZFwiXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG59XG5cblxuIl19