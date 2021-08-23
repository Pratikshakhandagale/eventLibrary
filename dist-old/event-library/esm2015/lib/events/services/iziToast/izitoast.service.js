/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/iziToast/izitoast.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgxIzitoastService } from 'ngx-izitoast';
import * as i0 from "@angular/core";
import * as i1 from "ngx-izitoast";
export class SbToastService {
    /**
     * @param {?} iziToast
     */
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    /**
     * For show toast message
     * @param {?} message
     * @param {?} type
     * @return {?}
     */
    showIziToastMsg(message, type) {
        type = (type == 'error') ? "danger" : type;
        this.destroyIzitoast();
        this.iziToast.show({
            title: type,
            message: message,
            class: "sb-toaster sb-toast-" + type,
            position: 'bottomCenter',
            timeout: 3000,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX'
        });
    }
    /**
     * Destroys IziToast
     * @return {?}
     */
    destroyIzitoast() {
        this.iziToast.destroy();
    }
}
SbToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SbToastService.ctorParameters = () => [
    { type: NgxIzitoastService }
];
/** @nocollapse */ SbToastService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SbToastService_Factory() { return new SbToastService(i0.ɵɵinject(i1.NgxIzitoastService)); }, token: SbToastService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SbToastService.prototype.iziToast;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXppdG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy9pemlUb2FzdC9peml0b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQU1sRCxNQUFNLE9BQU8sY0FBYzs7OztJQUV2QixZQUNZLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBQ3hDLENBQUM7Ozs7Ozs7SUFLRCxlQUFlLENBQUMsT0FBZSxFQUFFLElBQVk7UUFFekMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUzQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxzQkFBc0IsR0FBRyxJQUFJO1lBQ3BDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsWUFBWSxFQUFFLFNBQVM7WUFDdkIsYUFBYSxFQUFFLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFLRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7WUFqQ0osVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7O1lBTFEsa0JBQWtCOzs7Ozs7OztJQVNuQixrQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hJeml0b2FzdFNlcnZpY2UgfSBmcm9tICduZ3gtaXppdG9hc3QnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2JUb2FzdFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaXppVG9hc3Q6IE5neEl6aXRvYXN0U2VydmljZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvciBzaG93IHRvYXN0IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93SXppVG9hc3RNc2cobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICB0eXBlID0gKHR5cGUgPT0gJ2Vycm9yJykgPyBcImRhbmdlclwiIDogdHlwZTtcblxuICAgICAgICB0aGlzLmRlc3Ryb3lJeml0b2FzdCgpO1xuICAgICAgICB0aGlzLml6aVRvYXN0LnNob3coe1xuICAgICAgICAgICAgdGl0bGU6IHR5cGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgY2xhc3M6IFwic2ItdG9hc3RlciBzYi10b2FzdC1cIiArIHR5cGUsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbUNlbnRlcicsXG4gICAgICAgICAgICB0aW1lb3V0OiAzMDAwLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkluOiAnZmxpcEluWCcsXG4gICAgICAgICAgICB0cmFuc2l0aW9uT3V0OiAnZmxpcE91dFgnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIEl6aVRvYXN0XG4gICAgICovXG4gICAgZGVzdHJveUl6aXRvYXN0KCkge1xuICAgICAgICB0aGlzLml6aVRvYXN0LmRlc3Ryb3koKTtcbiAgICB9XG59XG5cblxuIl19