/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/userConfig/user-config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EventLibraryService } from '../../../event-library.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../event-library.service";
export class UserConfigService {
    /**
     * @param {?} eventLibraryService
     */
    constructor(eventLibraryService) {
        this.eventLibraryService = eventLibraryService;
    }
    /**
     * @return {?}
     */
    getConfigUrl() {
        return this.eventLibraryService.apiUrlConfig;
    }
}
UserConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserConfigService.ctorParameters = () => [
    { type: EventLibraryService }
];
/** @nocollapse */ UserConfigService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserConfigService_Factory() { return new UserConfigService(i0.ɵɵinject(i1.EventLibraryService)); }, token: UserConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    UserConfigService.prototype.userId;
    /**
     * @type {?}
     * @private
     */
    UserConfigService.prototype.eventLibraryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy91c2VyQ29uZmlnL3VzZXItY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFLckUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUNVLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQ2xELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0lBQy9DLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLG1CQUFtQjs7Ozs7SUFNMUIsbUNBQWU7Ozs7O0lBRWIsZ0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRMaWJyYXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2V2ZW50LWxpYnJhcnkuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWdTZXJ2aWNlIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRMaWJyYXJ5U2VydmljZTogRXZlbnRMaWJyYXJ5U2VydmljZSkge1xuICB9XG5cbiAgZ2V0Q29uZmlnVXJsKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50TGlicmFyeVNlcnZpY2UuYXBpVXJsQ29uZmlnO1xuICB9XG5cbn1cbiJdfQ==