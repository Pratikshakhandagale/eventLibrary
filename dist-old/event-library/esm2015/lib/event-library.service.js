/**
 * @fileoverview added by tsickle
 * Generated from: lib/event-library.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class EventLibraryService {
    /**
     * @param {?} translate
     * @param {?} config
     */
    constructor(translate, config) {
        this.translate = translate;
        this.config = config;
        this.apiUrlConfig = config.urlConfig;
        translate.setDefaultLang('en');
    }
}
EventLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EventLibraryService.ctorParameters = () => [
    { type: TranslateService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ["urlConfig",] }] }
];
/** @nocollapse */ EventLibraryService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function EventLibraryService_Factory() { return new EventLibraryService(i0.ɵɵinject(i1.TranslateService), i0.ɵɵinject("urlConfig", 8)); }, token: EventLibraryService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EventLibraryService.prototype.apiUrlConfig;
    /**
     * @type {?}
     * @private
     */
    EventLibraryService.prototype.translate;
    /** @type {?} */
    EventLibraryService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnQtbGlicmFyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFLdkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsWUFDVSxTQUEyQixFQUNLLE1BQVc7UUFEM0MsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDSyxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQVZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGdCQUFnQjs0Q0FTcEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxXQUFXOzs7OztJQUhqQywyQ0FBa0I7Ozs7O0lBRWhCLHdDQUFtQzs7SUFDbkMscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpYnJhcnlTZXJ2aWNlIHtcbiAgYXBpVXJsQ29uZmlnOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoXCJ1cmxDb25maWdcIikgcHVibGljIGNvbmZpZzogYW55KSB7XG4gICAgdGhpcy5hcGlVcmxDb25maWcgPSBjb25maWcudXJsQ29uZmlnO1xuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZW4nKTtcbiAgfVxufVxuIl19