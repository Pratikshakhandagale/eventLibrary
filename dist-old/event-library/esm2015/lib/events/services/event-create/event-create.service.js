/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/event-create/event-create.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { UserConfigService } from '../userConfig/user-config.service';
import { DataService } from '../data-request/data-request.service';
import * as i0 from "@angular/core";
import * as i1 from "../userConfig/user-config.service";
import * as i2 from "../data-request/data-request.service";
import * as i3 from "../iziToast/izitoast.service";
export class EventCreateService {
    /**
     * @param {?} userConfigService
     * @param {?} dataService
     * @param {?} sbToastService
     */
    constructor(userConfigService, dataService, sbToastService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.sbToastService = sbToastService;
    }
    /**
     * For get event form config
     * @return {?}
     */
    getEventFormConfig() {
        /** @type {?} */
        const req = {
            url: this.userConfigService.getConfigUrl().eventFormConfigApi
        };
        return this.dataService.get(req);
    }
    /**
     * For post event data
     * @param {?} formData
     * @return {?}
     */
    createEvent(formData) {
        /** @type {?} */
        const requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().create,
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
        // .subscribe((data)=>{
        //   console.log({data});
        // });
        this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    updateEvent(formData) {
        /** @type {?} */
        const requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.patch(option);
        // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    }
    /**
     * For publish event
     * @param {?} identifier
     * @return {?}
     */
    publishEvent(identifier) {
        /** @type {?} */
        const option = {
            url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
    }
}
EventCreateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventCreateService.ctorParameters = () => [
    { type: UserConfigService },
    { type: DataService },
    { type: SbToastService }
];
/** @nocollapse */ EventCreateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventCreateService_Factory() { return new EventCreateService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.SbToastService)); }, token: EventCreateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.userConfigService;
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.dataService;
    /**
     * @type {?}
     * @private
     */
    EventCreateService.prototype.sbToastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUtuRSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFFN0IsWUFDVSxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsY0FBOEI7UUFGOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDeEMsQ0FBQzs7Ozs7SUFLRCxrQkFBa0I7O2NBQ1YsR0FBRyxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxrQkFBa0I7U0FDOUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUtELFdBQVcsQ0FBQyxRQUFROztjQUVaLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRjs7Y0FFSyxNQUFNLEdBQUc7WUFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU07WUFDbEQsSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFHLGtCQUFrQixFQUFDO1NBQy9DO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyx1QkFBdUI7UUFFdkIseUJBQXlCO1FBQ3pCLE1BQU07UUFFTixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxRQUFROztjQUVaLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLFFBQVE7YUFDaEI7U0FDRjs7Y0FFSyxNQUFNLEdBQUc7WUFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUNqRixJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUcsa0JBQWtCLEVBQUM7U0FDL0M7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLG9GQUFvRjtJQUNyRixDQUFDOzs7Ozs7SUFJQSxZQUFZLENBQUMsVUFBVTs7Y0FFaEIsTUFBTSxHQUFHO1lBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLFVBQVU7WUFDdEUsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFHLGtCQUFrQixFQUFDO1NBQy9DO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQyxDQUFDOzs7WUEvRUgsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsaUJBQWlCO1lBQ2pCLFdBQVc7WUFGWCxjQUFjOzs7Ozs7OztJQVVuQiwrQ0FBNEM7Ozs7O0lBQzVDLHlDQUFnQzs7Ozs7SUFDaEMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2JUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pemlUb2FzdC9peml0b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlckNvbmZpZy91c2VyLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YS1yZXF1ZXN0L2RhdGEtcmVxdWVzdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRDcmVhdGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJDb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICBwcml2YXRlIHNiVG9hc3RTZXJ2aWNlOiBTYlRvYXN0U2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBnZXQgZXZlbnQgZm9ybSBjb25maWcgXG4gICAqL1xuICBnZXRFdmVudEZvcm1Db25maWcoKSB7XG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLmV2ZW50Rm9ybUNvbmZpZ0FwaVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UuZ2V0KHJlcSk7XG4gIH1cblxuICAvKipcbiAqIEZvciBwb3N0IGV2ZW50IGRhdGFcbiAqL1xuICBjcmVhdGVFdmVudChmb3JtRGF0YSkge1xuICAgXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgICByZXF1ZXN0OiB7XG4gICAgICAgIGV2ZW50OiBmb3JtRGF0YVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLmNyZWF0ZSxcbiAgICAgIGRhdGE6IHJlcXVlc3RCb2R5LFxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KG9wdGlvbik7XG4gICAgXG4gICAgLy8gLnN1YnNjcmliZSgoZGF0YSk9PntcbiAgICAgIFxuICAgIC8vICAgY29uc29sZS5sb2coe2RhdGF9KTtcbiAgICAvLyB9KTtcblxuICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiTmV3IEV2ZW50IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5XCIsICdzdWNjZXNzJyk7XG4gIH1cblxuXG4gIHVwZGF0ZUV2ZW50KGZvcm1EYXRhKSB7XG4gICBcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgZXZlbnQ6IGZvcm1EYXRhXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICB1cmw6IHRoaXMudXNlckNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnVXJsKCkudXBkYXRlICsgXCIvXCIgKyBmb3JtRGF0YVsnaWRlbnRpZmllciddLFxuICAgICAgZGF0YTogcmVxdWVzdEJvZHksXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBhdGNoKG9wdGlvbik7XG5cbiAgIC8vIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKFwiTmV3IEV2ZW50IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5XCIsICdzdWNjZXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIEZvciBwdWJsaXNoIGV2ZW50XG4gICAqL1xuICAgcHVibGlzaEV2ZW50KGlkZW50aWZpZXIpe1xuXG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLnB1Ymxpc2ggKyBcIi9cIiArIGlkZW50aWZpZXIsXG4gICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgIH07XG5cbiAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLnBvc3Qob3B0aW9uKTtcblxuICAgfVxufVxuIl19