/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/data-request/data-request.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserConfigService } from '../userConfig/user-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "@angular/common/http";
export class DataService {
    /**
     * @param {?} userConfigService
     * @param {?} http
     */
    constructor(userConfigService, http) {
        this.userConfigService = userConfigService;
        this.http = http;
        /**
         * Contains base Url for api end points
         */
        this.baseUrl = this.userConfigService.getConfigUrl().host;
    }
    /**
     * for preparing headers
     * @private
     * @param {?=} headers
     * @return {?}
     */
    getHeader(headers) {
        /** @type {?} */
        const default_headers = {
            Accept: 'application/json',
            Authorization: 'Bearer key',
        };
        return default_headers;
    }
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    post(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode !== 'OK') {
                return observableThrowError(data);
            }
            return observableOf(data);
        })));
    }
    /**
     * for making get api calls
     *
     * @param {?} requestParam interface
     * @return {?}
     */
    get(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param
        };
        return this.http.get(requestParam.url, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return observableOf(data);
        })));
    }
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    patch(requestParam) {
        /** @type {?} */
        const httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.patch(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode !== 'OK') {
                return observableThrowError(data);
            }
            return observableOf(data);
        })));
    }
}
DataService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: UserConfigService },
    { type: HttpClient }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * Contains base Url for api end points
     * @type {?}
     */
    DataService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    DataService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZGF0YS1yZXF1ZXN0L2RhdGEtcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLFVBQVUsSUFBSSxvQkFBb0IsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFLdEUsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBTXRCLFlBQ1UsaUJBQW9DLEVBQ3BDLElBQWdCO1FBRGhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBWTs7OztRQUoxQixZQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztJQUtyRCxDQUFDOzs7Ozs7O0lBS08sU0FBUyxDQUFDLE9BQWdDOztjQUMxQyxlQUFlLEdBQUc7WUFDdEIsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixhQUFhLEVBQUUsWUFBWTtTQUM1QjtRQUVELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQU1ELElBQUksQ0FBQyxZQUEwQjs7Y0FDdkIsV0FBVyxHQUFnQjtZQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckYsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMxRSxRQUFROzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM5QixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7Ozs7SUFRRCxHQUFHLENBQUMsWUFBMEI7O2NBQ3RCLFdBQVcsR0FBZ0I7WUFDL0IsT0FBTyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckUsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzNCO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDdEQsUUFBUTs7OztRQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFFckIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7Ozs7OztJQU1ELEtBQUssQ0FBQyxZQUEwQjs7Y0FDeEIsV0FBVyxHQUFnQjtZQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckYsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRSxRQUFROzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM5QixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQWhGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxpQkFBaUI7WUFMakIsVUFBVTs7Ozs7Ozs7SUFjakIsOEJBQXFEOzs7OztJQUduRCx3Q0FBNEM7Ozs7O0lBQzVDLDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgdGhyb3dFcnJvciBhcyBvYnNlcnZhYmxlVGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTZXJ2ZXJSZXNwb25zZSwgUmVxdWVzdFBhcmFtLCBIdHRwT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgVXNlckNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gIC8qKlxuICAgICAqIENvbnRhaW5zIGJhc2UgVXJsIGZvciBhcGkgZW5kIHBvaW50c1xuICAgICAqL1xuICBiYXNlVXJsID0gdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5ob3N0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlckNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgLyoqXG4gKiBmb3IgcHJlcGFyaW5nIGhlYWRlcnNcbiAqL1xuICBwcml2YXRlIGdldEhlYWRlcihoZWFkZXJzPzogSHR0cE9wdGlvbnNbJ2hlYWRlcnMnXSk6IEh0dHBPcHRpb25zWydoZWFkZXJzJ10ge1xuICAgIGNvbnN0IGRlZmF1bHRfaGVhZGVycyA9IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciBrZXknLFxuICAgIH07XG5cbiAgICByZXR1cm4gZGVmYXVsdF9oZWFkZXJzO1xuICB9XG5cbiAgLyoqXG4gKiBmb3IgbWFraW5nIHBvc3QgYXBpIGNhbGxzXG4gKiBAcGFyYW0gUmVxdWVzdFBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcbiAqL1xuICBwb3N0KHJlcXVlc3RQYXJhbTogUmVxdWVzdFBhcmFtKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogSHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gdGhpcy5nZXRIZWFkZXIocmVxdWVzdFBhcmFtLmhlYWRlcikgOiB0aGlzLmdldEhlYWRlcigpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGFyYW0ucGFyYW1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChyZXF1ZXN0UGFyYW0udXJsLCByZXF1ZXN0UGFyYW0uZGF0YSwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlQ29kZSAhPT0gJ09LJykge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlVGhyb3dFcnJvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xuICAgICAgfSkpO1xuICB9XG5cblxuICAvKipcbiAqIGZvciBtYWtpbmcgZ2V0IGFwaSBjYWxsc1xuICpcbiAqIEBwYXJhbSByZXF1ZXN0UGFyYW0gaW50ZXJmYWNlXG4gKi9cbiAgZ2V0KHJlcXVlc3RQYXJhbTogUmVxdWVzdFBhcmFtKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogSHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gcmVxdWVzdFBhcmFtLmhlYWRlciA6IHRoaXMuZ2V0SGVhZGVyKCksXG4gICAgICBwYXJhbXM6IHJlcXVlc3RQYXJhbS5wYXJhbVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXF1ZXN0UGFyYW0udXJsLCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgIG1lcmdlTWFwKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKGRhdGEpO1xuICAgICAgfSkpO1xuXG4gIH1cblxuICAvKipcbiogZm9yIG1ha2luZyBwb3N0IGFwaSBjYWxsc1xuKiBAcGFyYW0gUmVxdWVzdFBhcmFtIHJlcXVlc3RQYXJhbSBpbnRlcmZhY2VcbiovXG4gIHBhdGNoKHJlcXVlc3RQYXJhbTogUmVxdWVzdFBhcmFtKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBodHRwT3B0aW9uczogSHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiByZXF1ZXN0UGFyYW0uaGVhZGVyID8gdGhpcy5nZXRIZWFkZXIocmVxdWVzdFBhcmFtLmhlYWRlcikgOiB0aGlzLmdldEhlYWRlcigpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGFyYW0ucGFyYW1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2gocmVxdWVzdFBhcmFtLnVybCwgcmVxdWVzdFBhcmFtLmRhdGEsIGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZUNvZGUgIT09ICdPSycpIHtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhKTtcbiAgICAgIH0pKTtcbiAgfVxuXG59XG5cblxuIl19