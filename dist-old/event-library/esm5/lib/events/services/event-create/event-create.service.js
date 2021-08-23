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
var EventCreateService = /** @class */ (function () {
    function EventCreateService(userConfigService, dataService, sbToastService) {
        this.userConfigService = userConfigService;
        this.dataService = dataService;
        this.sbToastService = sbToastService;
    }
    /**
     * For get event form config
     */
    /**
     * For get event form config
     * @return {?}
     */
    EventCreateService.prototype.getEventFormConfig = /**
     * For get event form config
     * @return {?}
     */
    function () {
        /** @type {?} */
        var req = {
            url: this.userConfigService.getConfigUrl().eventFormConfigApi
        };
        return this.dataService.get(req);
    };
    /**
   * For post event data
   */
    /**
     * For post event data
     * @param {?} formData
     * @return {?}
     */
    EventCreateService.prototype.createEvent = /**
     * For post event data
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        var option = {
            url: this.userConfigService.getConfigUrl().create,
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
        // .subscribe((data)=>{
        //   console.log({data});
        // });
        this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    EventCreateService.prototype.updateEvent = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var requestBody = {
            request: {
                event: formData
            }
        };
        /** @type {?} */
        var option = {
            url: this.userConfigService.getConfigUrl().update + "/" + formData['identifier'],
            data: requestBody,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.patch(option);
        // this.sbToastService.showIziToastMsg("New Event Created Successfully", 'success');
    };
    /**
     * For publish event
     */
    /**
     * For publish event
     * @param {?} identifier
     * @return {?}
     */
    EventCreateService.prototype.publishEvent = /**
     * For publish event
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        /** @type {?} */
        var option = {
            url: this.userConfigService.getConfigUrl().publish + "/" + identifier,
            header: { 'Content-Type': 'application/json' }
        };
        return this.dataService.post(option);
    };
    EventCreateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EventCreateService.ctorParameters = function () { return [
        { type: UserConfigService },
        { type: DataService },
        { type: SbToastService }
    ]; };
    /** @nocollapse */ EventCreateService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventCreateService_Factory() { return new EventCreateService(i0.ɵɵinject(i1.UserConfigService), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.SbToastService)); }, token: EventCreateService, providedIn: "root" });
    return EventCreateService;
}());
export { EventCreateService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtY3JlYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvc2VydmljZXMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7OztBQUVuRTtJQUtFLDRCQUNVLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixjQUE4QjtRQUY5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUN4QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0NBQWtCOzs7O0lBQWxCOztZQUNRLEdBQUcsR0FBRztZQUNWLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsa0JBQWtCO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O0tBRUM7Ozs7OztJQUNELHdDQUFXOzs7OztJQUFYLFVBQVksUUFBUTs7WUFFWixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7O1lBRUssTUFBTSxHQUFHO1lBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNO1lBQ2xELElBQUksRUFBRSxXQUFXO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRyxrQkFBa0IsRUFBQztTQUMvQztRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsdUJBQXVCO1FBRXZCLHlCQUF5QjtRQUN6QixNQUFNO1FBRU4sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFHRCx3Q0FBVzs7OztJQUFYLFVBQVksUUFBUTs7WUFFWixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7O1lBRUssTUFBTSxHQUFHO1lBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDakYsSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFHLGtCQUFrQixFQUFDO1NBQy9DO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV2QyxvRkFBb0Y7SUFDckYsQ0FBQztJQUNEOztPQUVHOzs7Ozs7SUFDRix5Q0FBWTs7Ozs7SUFBWixVQUFhLFVBQVU7O1lBRWhCLE1BQU0sR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxVQUFVO1lBQ3RFLE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRyxrQkFBa0IsRUFBQztTQUMvQztRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckMsQ0FBQzs7Z0JBL0VILFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUZYLGNBQWM7Ozs2QkFEdkI7Q0FxRkMsQUFoRkQsSUFnRkM7U0E3RVksa0JBQWtCOzs7Ozs7SUFHM0IsK0NBQTRDOzs7OztJQUM1Qyx5Q0FBZ0M7Ozs7O0lBQ2hDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNiVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaXppVG9hc3QvaXppdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3VzZXJDb25maWcvdXNlci1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL2RhdGEtcmVxdWVzdC9kYXRhLXJlcXVlc3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50Q3JlYXRlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyQ29uZmlnU2VydmljZTogVXNlckNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYlRvYXN0U2VydmljZTogU2JUb2FzdFNlcnZpY2UpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZ2V0IGV2ZW50IGZvcm0gY29uZmlnIFxuICAgKi9cbiAgZ2V0RXZlbnRGb3JtQ29uZmlnKCkge1xuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5ldmVudEZvcm1Db25maWdBcGlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmRhdGFTZXJ2aWNlLmdldChyZXEpO1xuICB9XG5cbiAgLyoqXG4gKiBGb3IgcG9zdCBldmVudCBkYXRhXG4gKi9cbiAgY3JlYXRlRXZlbnQoZm9ybURhdGEpIHtcbiAgIFxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgICAgcmVxdWVzdDoge1xuICAgICAgICBldmVudDogZm9ybURhdGFcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5jcmVhdGUsXG4gICAgICBkYXRhOiByZXF1ZXN0Qm9keSxcbiAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ31cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZGF0YVNlcnZpY2UucG9zdChvcHRpb24pO1xuICAgIFxuICAgIC8vIC5zdWJzY3JpYmUoKGRhdGEpPT57XG4gICAgICBcbiAgICAvLyAgIGNvbnNvbGUubG9nKHtkYXRhfSk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIk5ldyBFdmVudCBDcmVhdGVkIFN1Y2Nlc3NmdWxseVwiLCAnc3VjY2VzcycpO1xuICB9XG5cblxuICB1cGRhdGVFdmVudChmb3JtRGF0YSkge1xuICAgXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgICByZXF1ZXN0OiB7XG4gICAgICAgIGV2ZW50OiBmb3JtRGF0YVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgdXJsOiB0aGlzLnVzZXJDb25maWdTZXJ2aWNlLmdldENvbmZpZ1VybCgpLnVwZGF0ZSArIFwiL1wiICsgZm9ybURhdGFbJ2lkZW50aWZpZXInXSxcbiAgICAgIGRhdGE6IHJlcXVlc3RCb2R5LFxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wYXRjaChvcHRpb24pO1xuXG4gICAvLyB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhcIk5ldyBFdmVudCBDcmVhdGVkIFN1Y2Nlc3NmdWxseVwiLCAnc3VjY2VzcycpO1xuICB9XG4gIC8qKlxuICAgKiBGb3IgcHVibGlzaCBldmVudFxuICAgKi9cbiAgIHB1Ymxpc2hFdmVudChpZGVudGlmaWVyKXtcblxuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgIHVybDogdGhpcy51c2VyQ29uZmlnU2VydmljZS5nZXRDb25maWdVcmwoKS5wdWJsaXNoICsgXCIvXCIgKyBpZGVudGlmaWVyLFxuICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9XG4gICB9O1xuXG4gICByZXR1cm4gdGhpcy5kYXRhU2VydmljZS5wb3N0KG9wdGlvbik7XG5cbiAgIH1cbn1cbiJdfQ==