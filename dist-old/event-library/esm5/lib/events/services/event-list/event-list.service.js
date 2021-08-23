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
var EventListService = /** @class */ (function () {
    function EventListService(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
     * For get event list
     */
    /**
     * For get event list
     * @return {?}
     */
    EventListService.prototype.getEventList = /**
     * For get event list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var req = {
            url: this.userConfigService.getConfigUrl().list
        };
        return this.dataService.get(req);
    };
    /**
     * @return {?}
     */
    EventListService.prototype.getEventFilters = /**
     * @return {?}
     */
    function () {
        // return this.http.get<any>('assets/eventFilter.json');
    };
    EventListService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventListService.ctorParameters = function () { return [
        { type: UserConfigService },
        { type: DataService }
    ]; };
    /** @nocollapse */ EventListService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventListService_Factory() { return new EventListService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: EventListService, providedIn: "root" });
    return EventListService;
}());
export { EventListService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzL3NlcnZpY2VzL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFbkU7SUFLRSwwQkFDVSxpQkFBb0MsRUFDcEMsV0FBd0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNsQyxDQUFDO0lBR0Q7O09BRUc7Ozs7O0lBQ0gsdUNBQVk7Ozs7SUFBWjs7WUFDUSxHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUk7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDRSx3REFBd0Q7SUFDMUQsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsaUJBQWlCO2dCQUNqQixXQUFXOzs7MkJBRnBCO0NBOEJDLEFBMUJELElBMEJDO1NBdkJZLGdCQUFnQjs7Ozs7O0lBR3pCLDZDQUE0Qzs7Ozs7SUFDNUMsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9kYXRhLXJlcXVlc3QvZGF0YS1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICB9XG5cblxuICAvKipcbiAgICogRm9yIGdldCBldmVudCBsaXN0IFxuICAgKi9cbiAgZ2V0RXZlbnRMaXN0KCkge1xuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5saXN0XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldChyZXEpO1xuICB9XG5cbiAgZ2V0RXZlbnRGaWx0ZXJzKCkge1xuICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oJ2Fzc2V0cy9ldmVudEZpbHRlci5qc29uJyk7XG4gIH1cblxufVxuIl19