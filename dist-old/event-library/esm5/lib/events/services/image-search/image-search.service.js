/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/image-search/image-search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
import * as _ from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "../data-request/data-request.service";
var ImageSearchService = /** @class */ (function () {
    function ImageSearchService(userConfigService, dataService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
    }
    /**
   * For get event detail
   */
    /**
     * For get event detail
     * @return {?}
     */
    ImageSearchService.prototype.getEditMode = /**
     * For get event detail
     * @return {?}
     */
    function () {
        /** @type {?} */
        var req = {
            url: this.userConfigService.getConfigUrl().EditModeApi
        };
        return this.dataService.get(req);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    ImageSearchService.prototype.getMyImages = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var reqParam = {
            url: this.userConfigService.getConfigUrl().ImageSearchApi,
            data: {
                request: {
                    filters: {
                        contentType: 'Asset',
                        compatibilityLevel: {
                            min: 1,
                            max: 2
                        },
                        status: ['Live'],
                    },
                    limit: 50,
                }
            }
        };
        reqParam.data.request = request ? _.merge({}, reqParam.data.request, request) : reqParam;
        console.log(reqParam);
        return this.dataService.get(reqParam);
    };
    /**
     * @param {?=} req
     * @return {?}
     */
    ImageSearchService.prototype.createMediaAsset = /**
     * @param {?=} req
     * @return {?}
     */
    function (req) {
        /** @type {?} */
        var reqParam = {
            url: _.get(this.userConfigService.getConfigUrl(), 'createImage'),
            // url: _.get(this.configService.urlConFig, 'URLS.CONTENT.CREATE'),
            data: {
                request: {
                    content: {
                        contentType: 'Asset',
                        language: ['English'],
                    }
                }
            }
        };
        reqParam.data.request = req ? _.merge({}, reqParam.data.request, req) : reqParam;
        return this.dataService.post(reqParam);
    };
    /**
     * @param {?} req
     * @param {?} assetId
     * @return {?}
     */
    ImageSearchService.prototype.uploadMedia = /**
     * @param {?} req
     * @param {?} assetId
     * @return {?}
     */
    function (req, assetId) {
        /** @type {?} */
        var reqParam = {
            // url: `${this.configService.urlConFig.URLS.CONTENT.UPLOAD}${assetId}`,
            url: this.userConfigService.getConfigUrl().EditModeApi,
            data: req.data
        };
        reqParam = req ? _.merge({}, reqParam, req) : reqParam;
        return this.dataService.post(reqParam);
    };
    ImageSearchService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ImageSearchService.ctorParameters = function () { return [
        { type: UserConfigService },
        { type: DataService }
    ]; };
    /** @nocollapse */ ImageSearchService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ImageSearchService_Factory() { return new ImageSearchService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService)); }, token: ImageSearchService, providedIn: "root" });
    return ImageSearchService;
}());
export { ImageSearchService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ImageSearchService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    ImageSearchService.prototype.dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvaW1hZ2Utc2VhcmNoL2ltYWdlLXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxLQUFLLENBQUMsTUFBTSxXQUFXLENBQUM7Ozs7QUFFL0I7SUFLRSw0QkFDVSxpQkFBb0MsRUFDcEMsV0FBd0I7UUFEeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNsQyxDQUFDO0lBRUM7O0tBRUM7Ozs7O0lBQ0Esd0NBQVc7Ozs7SUFBWDs7WUFFTyxHQUFHLEdBQUc7WUFDVixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVc7U0FDdkQ7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQU87O1lBRVgsUUFBUSxHQUFHO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxjQUFjO1lBQ3pELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixrQkFBa0IsRUFBRTs0QkFDbEIsR0FBRyxFQUFFLENBQUM7NEJBQ04sR0FBRyxFQUFFLENBQUM7eUJBQ1A7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUNqQjtvQkFDRCxLQUFLLEVBQUUsRUFBRTtpQkFDVjthQUNGO1NBQ0Y7UUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsNkNBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQVk7O1lBQ3JCLFFBQVEsR0FBRztZQUNmLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxhQUFhLENBQUM7O1lBRWhFLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFO3dCQUNQLFdBQVcsRUFBRSxPQUFPO3dCQUNwQixRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBRXRCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNqRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUVELHdDQUFXOzs7OztJQUFYLFVBQVksR0FBRyxFQUFFLE9BQVk7O1lBQ3ZCLFFBQVEsR0FBRzs7WUFFYixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVc7WUFDdEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1NBQ2Y7UUFDRCxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQXZFSixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLGlCQUFpQjtnQkFDakIsV0FBVzs7OzZCQUZwQjtDQTZFQyxBQXhFRCxJQXdFQztTQXJFWSxrQkFBa0I7Ozs7OztJQUczQiwrQ0FBNEM7Ozs7O0lBQzVDLHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlckNvbmZpZy91c2VyLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YS1yZXF1ZXN0L2RhdGEtcmVxdWVzdC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VTZWFyY2hTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICB9XG5cbiAgICAvKipcbiAgICogRm9yIGdldCBldmVudCBkZXRhaWwgXG4gICAqL1xuICAgICBnZXRFZGl0TW9kZSgpXG4gICAgIHtcbiAgICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLkVkaXRNb2RlQXBpXG4gICAgICB9O1xuICBcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldChyZXEpO1xuICAgIH1cblxuICAgIGdldE15SW1hZ2VzKHJlcXVlc3QpXG4gICAge1xuICAgICAgY29uc3QgcmVxUGFyYW0gPSB7XG4gICAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5JbWFnZVNlYXJjaEFwaSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdBc3NldCcsXG4gICAgICAgICAgICAgIGNvbXBhdGliaWxpdHlMZXZlbDoge1xuICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICBtYXg6IDJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3RhdHVzOiBbJ0xpdmUnXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxUGFyYW0uZGF0YS5yZXF1ZXN0ID0gcmVxdWVzdCA/IF8ubWVyZ2Uoe30sIHJlcVBhcmFtLmRhdGEucmVxdWVzdCwgcmVxdWVzdCkgOiByZXFQYXJhbTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcVBhcmFtKTtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldChyZXFQYXJhbSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTWVkaWFBc3NldChyZXE/OiBvYmplY3QpIHtcbiAgICAgIGNvbnN0IHJlcVBhcmFtID0ge1xuICAgICAgICB1cmw6IF8uZ2V0KHRoaXMudXNlckNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnVXJsKCksICdjcmVhdGVJbWFnZScpLFxuICAgICAgICAvLyB1cmw6IF8uZ2V0KHRoaXMuY29uZmlnU2VydmljZS51cmxDb25GaWcsICdVUkxTLkNPTlRFTlQuQ1JFQVRFJyksXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICByZXF1ZXN0OiB7XG4gICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnQXNzZXQnLFxuICAgICAgICAgICAgICBsYW5ndWFnZTogWydFbmdsaXNoJ10sXG4gICAgICAgICAgICAvLyAgY29kZTogVVVJRC5VVUlEKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVxUGFyYW0uZGF0YS5yZXF1ZXN0ID0gcmVxID8gXy5tZXJnZSh7fSwgcmVxUGFyYW0uZGF0YS5yZXF1ZXN0LCByZXEpIDogcmVxUGFyYW07XG4gICAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KHJlcVBhcmFtKTtcbiAgICB9XG4gIFxuICAgIHVwbG9hZE1lZGlhKHJlcSwgYXNzZXRJZDogYW55KSB7XG4gICAgICBsZXQgcmVxUGFyYW0gPSB7XG4gICAgICAgIC8vIHVybDogYCR7dGhpcy5jb25maWdTZXJ2aWNlLnVybENvbkZpZy5VUkxTLkNPTlRFTlQuVVBMT0FEfSR7YXNzZXRJZH1gLFxuICAgICAgICB1cmw6IHRoaXMudXNlckNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnVXJsKCkuRWRpdE1vZGVBcGksXG4gICAgICAgIGRhdGE6IHJlcS5kYXRhXG4gICAgICB9O1xuICAgICAgcmVxUGFyYW0gPSByZXEgPyBfLm1lcmdlKHt9LCByZXFQYXJhbSwgcmVxKSA6IHJlcVBhcmFtO1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucG9zdChyZXFQYXJhbSk7XG4gICAgfVxufVxuIl19