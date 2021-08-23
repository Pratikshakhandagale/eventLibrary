/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-list/event-list.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "../data-request/data-request.service";
export class EventListService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     */
    constructor(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event list
     * @return {?}
     */
    getEventList() {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().list
        };
        return this.dataService.get(req);
    }
    /**
     * @return {?}
     */
    getEventFilters() {
        // return this.http.get<any>('assets/eventFilter.json');
    }
}
EventListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventListService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService }
];
/** @nocollapse */ EventListService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventListService_Factory() { return new EventListService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: EventListService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventListService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventListService.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzL3NlcnZpY2VzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFLbkUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFDVSxpQkFBb0MsRUFDcEMsV0FBd0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNsQyxDQUFDOzs7OztJQU1ELFlBQVk7O2NBQ0osR0FBRyxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJO1NBQ2hEO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLHdEQUF3RDtJQUMxRCxDQUFDOzs7WUF4QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsaUJBQWlCO1lBQ2pCLFdBQVc7Ozs7Ozs7O0lBUWhCLDZDQUE0Qzs7Ozs7SUFDNUMsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICB9XG5cblxuICAvKipcbiAgICogRm9yIGdldCBldmVudCBsaXN0IFxuICAgKi9cbiAgZ2V0RXZlbnRMaXN0KCkge1xuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5saXN0XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldChyZXEpO1xuICB9XG5cbiAgZ2V0RXZlbnRGaWx0ZXJzKCkge1xuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oJ2Fzc2V0cy9ldmVudEZpbHRlci5qc29uJyk7XG4gIH1cblxufVxuIl19