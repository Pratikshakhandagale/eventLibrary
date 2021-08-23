/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/userConfig/user-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EventLibraryService } from '../../../event-library.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../event-library.service";
var UserConfigService = /** @class */ (function () {
    function UserConfigService(eventLibraryService) {
        this.eventLibraryService = eventLibraryService;
    }
    /**
     * @return {?}
     */
    UserConfigService.prototype.getConfigUrl = /**
     * @return {?}
     */
    function () {
        return this.eventLibraryService.apiUrlConfig;
    };
    UserConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserConfigService.ctorParameters = function () { return [
        { type: EventLibraryService }
    ]; };
    /** @nocollapse */ UserConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConfigService_Factory() { return new UserConfigService(i0.ɵɵinject(i1.EventLibraryService)); }, token: UserConfigService, providedIn: "root" });
    return UserConfigService;
}());
export { UserConfigService };
if (false) {
    /** @type {?} */
    UserConfigService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    UserConfigService.prototype.eventLibraryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFckU7SUFLRSwyQkFDVSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNsRCxDQUFDOzs7O0lBRUQsd0NBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsbUJBQW1COzs7NEJBRDVCO0NBZ0JDLEFBYkQsSUFhQztTQVZZLGlCQUFpQjs7O0lBQzVCLG1DQUFlOzs7OztJQUViLGdEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TGlicmFyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9ldmVudC1saWJyYXJ5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlnU2VydmljZSB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50TGlicmFyeVNlcnZpY2U6IEV2ZW50TGlicmFyeVNlcnZpY2UpIHtcbiAgfVxuXG4gIGdldENvbmZpZ1VybCgpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudExpYnJhcnlTZXJ2aWNlLmFwaVVybENvbmZpZztcbiAgfVxuXG59XG4iXX0=