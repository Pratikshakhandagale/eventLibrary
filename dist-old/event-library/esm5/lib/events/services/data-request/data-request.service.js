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
var DataService = /** @class */ (function () {
    function DataService(userConfigService, http) {
        this.userConfigService = userConfigService;
        this.http = http;
        /**
         * Contains base Url for api end points
         */
        this.baseUrl = this.userConfigService.getConfigUrl().host;
    }
    /**
   * for preparing headers
   */
    /**
     * for preparing headers
     * @private
     * @param {?=} headers
     * @return {?}
     */
    DataService.prototype.getHeader = /**
     * for preparing headers
     * @private
     * @param {?=} headers
     * @return {?}
     */
    function (headers) {
        /** @type {?} */
        var default_headers = {
            Accept: 'application/json',
            Authorization: 'Bearer key',
        };
        return default_headers;
    };
    /**
   * for making post api calls
   * @param RequestParam requestParam interface
   */
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    DataService.prototype.post = /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    function (requestParam) {
        /** @type {?} */
        var httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.post(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.responseCode !== 'OK') {
                return observableThrowError(data);
            }
            return observableOf(data);
        })));
    };
    /**
   * for making get api calls
   *
   * @param requestParam interface
   */
    /**
     * for making get api calls
     *
     * @param {?} requestParam interface
     * @return {?}
     */
    DataService.prototype.get = /**
     * for making get api calls
     *
     * @param {?} requestParam interface
     * @return {?}
     */
    function (requestParam) {
        /** @type {?} */
        var httpOptions = {
            headers: requestParam.header ? requestParam.header : this.getHeader(),
            params: requestParam.param
        };
        return this.http.get(requestParam.url, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return observableOf(data);
        })));
    };
    /**
  * for making post api calls
  * @param RequestParam requestParam interface
  */
    /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    DataService.prototype.patch = /**
     * for making post api calls
     * @param {?} requestParam
     * @return {?}
     */
    function (requestParam) {
        /** @type {?} */
        var httpOptions = {
            headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
            params: requestParam.param
        };
        return this.http.patch(requestParam.url, requestParam.data, httpOptions).pipe(mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.responseCode !== 'OK') {
                return observableThrowError(data);
            }
            return observableOf(data);
        })));
    };
    DataService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: UserConfigService },
        { type: HttpClient }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.HttpClient)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZGF0YS1yZXF1ZXN0L2RhdGEtcmVxdWVzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLHNCQUFzQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLFVBQVUsSUFBSSxvQkFBb0IsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFdEU7SUFTRSxxQkFDVSxpQkFBb0MsRUFDcEMsSUFBZ0I7UUFEaEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxTQUFJLEdBQUosSUFBSSxDQUFZOzs7O1FBSjFCLFlBQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBS3JELENBQUM7SUFFRDs7S0FFQzs7Ozs7OztJQUNPLCtCQUFTOzs7Ozs7SUFBakIsVUFBa0IsT0FBZ0M7O1lBQzFDLGVBQWUsR0FBRztZQUN0QixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLGFBQWEsRUFBRSxZQUFZO1NBQzVCO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7S0FHQzs7Ozs7O0lBQ0QsMEJBQUk7Ozs7O0lBQUosVUFBSyxZQUEwQjs7WUFDdkIsV0FBVyxHQUFnQjtZQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckYsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMxRSxRQUFROzs7O1FBQUMsVUFBQyxJQUFTO1lBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUdEOzs7O0tBSUM7Ozs7Ozs7SUFDRCx5QkFBRzs7Ozs7O0lBQUgsVUFBSSxZQUEwQjs7WUFDdEIsV0FBVyxHQUFnQjtZQUMvQixPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDM0I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN0RCxRQUFROzs7O1FBQUMsVUFBQyxJQUFTO1lBRWpCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBRUQ7OztJQUdBOzs7Ozs7SUFDQSwyQkFBSzs7Ozs7SUFBTCxVQUFNLFlBQTBCOztZQUN4QixXQUFXLEdBQWdCO1lBQy9CLE9BQU8sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyRixNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDM0I7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzNFLFFBQVE7Ozs7UUFBQyxVQUFDLElBQVM7WUFDakIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDOUIsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUNELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDUixDQUFDOztnQkFoRkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxpQkFBaUI7Z0JBTGpCLFVBQVU7OztzQkFEbkI7Q0EwRkMsQUFsRkQsSUFrRkM7U0EvRVksV0FBVzs7Ozs7O0lBSXRCLDhCQUFxRDs7Ozs7SUFHbkQsd0NBQTRDOzs7OztJQUM1QywyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIHRocm93RXJyb3IgYXMgb2JzZXJ2YWJsZVRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2VydmVyUmVzcG9uc2UsIFJlcXVlc3RQYXJhbSwgSHR0cE9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFVzZXJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlckNvbmZpZy91c2VyLWNvbmZpZy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAvKipcbiAgICAgKiBDb250YWlucyBiYXNlIFVybCBmb3IgYXBpIGVuZCBwb2ludHNcbiAgICAgKi9cbiAgYmFzZVVybCA9IHRoaXMudXNlckNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnVXJsKCkuaG9zdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgfVxuXG4gIC8qKlxuICogZm9yIHByZXBhcmluZyBoZWFkZXJzXG4gKi9cbiAgcHJpdmF0ZSBnZXRIZWFkZXIoaGVhZGVycz86IEh0dHBPcHRpb25zWydoZWFkZXJzJ10pOiBIdHRwT3B0aW9uc1snaGVhZGVycyddIHtcbiAgICBjb25zdCBkZWZhdWx0X2hlYWRlcnMgPSB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIga2V5JyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlZmF1bHRfaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICogZm9yIG1ha2luZyBwb3N0IGFwaSBjYWxsc1xuICogQHBhcmFtIFJlcXVlc3RQYXJhbSByZXF1ZXN0UGFyYW0gaW50ZXJmYWNlXG4gKi9cbiAgcG9zdChyZXF1ZXN0UGFyYW06IFJlcXVlc3RQYXJhbSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IEh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHRoaXMuZ2V0SGVhZGVyKHJlcXVlc3RQYXJhbS5oZWFkZXIpIDogdGhpcy5nZXRIZWFkZXIoKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QocmVxdWVzdFBhcmFtLnVybCwgcmVxdWVzdFBhcmFtLmRhdGEsIGh0dHBPcHRpb25zKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZUNvZGUgIT09ICdPSycpIHtcbiAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRocm93RXJyb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhKTtcbiAgICAgIH0pKTtcbiAgfVxuXG5cbiAgLyoqXG4gKiBmb3IgbWFraW5nIGdldCBhcGkgY2FsbHNcbiAqXG4gKiBAcGFyYW0gcmVxdWVzdFBhcmFtIGludGVyZmFjZVxuICovXG4gIGdldChyZXF1ZXN0UGFyYW06IFJlcXVlc3RQYXJhbSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IEh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHJlcXVlc3RQYXJhbS5oZWFkZXIgOiB0aGlzLmdldEhlYWRlcigpLFxuICAgICAgcGFyYW1zOiByZXF1ZXN0UGFyYW0ucGFyYW1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVxdWVzdFBhcmFtLnVybCwgaHR0cE9wdGlvbnMpLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoZGF0YTogYW55KSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVPZihkYXRhKTtcbiAgICAgIH0pKTtcblxuICB9XG5cbiAgLyoqXG4qIGZvciBtYWtpbmcgcG9zdCBhcGkgY2FsbHNcbiogQHBhcmFtIFJlcXVlc3RQYXJhbSByZXF1ZXN0UGFyYW0gaW50ZXJmYWNlXG4qL1xuICBwYXRjaChyZXF1ZXN0UGFyYW06IFJlcXVlc3RQYXJhbSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnM6IEh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogcmVxdWVzdFBhcmFtLmhlYWRlciA/IHRoaXMuZ2V0SGVhZGVyKHJlcXVlc3RQYXJhbS5oZWFkZXIpIDogdGhpcy5nZXRIZWFkZXIoKSxcbiAgICAgIHBhcmFtczogcmVxdWVzdFBhcmFtLnBhcmFtXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHJlcXVlc3RQYXJhbS51cmwsIHJlcXVlc3RQYXJhbS5kYXRhLCBodHRwT3B0aW9ucykucGlwZShcbiAgICAgIG1lcmdlTWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VDb2RlICE9PSAnT0snKSB7XG4gICAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaHJvd0Vycm9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoZGF0YSk7XG4gICAgICB9KSk7XG4gIH1cblxufVxuXG5cbiJdfQ==