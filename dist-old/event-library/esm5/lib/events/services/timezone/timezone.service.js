/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/timezone/timezone.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TimezoneCal = /** @class */ (function () {
    function TimezoneCal() {
        /**
         * For get timezone code
         * @return string (Eg : IST)
         */
        this.timeZoneAbbreviated = (/**
         * @return {?}
         */
        function () {
            var tz = new Date().toString().match(/\((.+)\)/)[1];
            if (tz.includes(" ")) {
                return tz
                    .split(" ")
                    .map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                function (_a) {
                    var _b = tslib_1.__read(_a, 1), first = _b[0];
                    return first;
                }))
                    .join("");
            }
            else {
                return tz;
            }
        });
    }
    /**
     * For fing current location time
     *
     * @param date event date
     * @param time event time
     * @returns location base date & time
     */
    /**
     * For fing current location time
     *
     * @param {?} date event date
     * @param {?} time event time
     * @return {?} location base date & time
     */
    TimezoneCal.prototype.calcTime = /**
     * For fing current location time
     *
     * @param {?} date event date
     * @param {?} time event time
     * @return {?} location base date & time
     */
    function (date, time) {
        // create Date object for current location
        /** @type {?} */
        var d = new Date(date + " " + time);
        /** @type {?} */
        var offset = d.getTimezoneOffset() / -60;
        //alert(date + ' - ' + time);
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        /** @type {?} */
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        return new Date(utc + (3600000 * offset));
    };
    /**
     * To get time offset
     * @returns offset (eg +5.30 etc)
     */
    /**
     * To get time offset
     * @return {?} offset (eg +5.30 etc)
     */
    TimezoneCal.prototype.getTimeOffset = /**
     * To get time offset
     * @return {?} offset (eg +5.30 etc)
     */
    function () {
        /** @type {?} */
        var date = new Date();
        /** @type {?} */
        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        /** @type {?} */
        var offset = Math.abs(date.getTimezoneOffset());
        /** @type {?} */
        var hours = this.pad(Math.floor(offset / 60));
        /** @type {?} */
        var minutes = this.pad(offset % 60);
        return sign + hours + ":" + minutes;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimezoneCal.prototype.pad = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value < 10 ? '0' + value : value;
    };
    TimezoneCal.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TimezoneCal.ctorParameters = function () { return []; };
    /** @nocollapse */ TimezoneCal.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezoneCal_Factory() { return new TimezoneCal(); }, token: TimezoneCal, providedIn: "root" });
    return TimezoneCal;
}());
export { TimezoneCal };
if (false) {
    /**
     * For get timezone code
     * \@return string (Eg : IST)
     * @type {?}
     */
    TimezoneCal.prototype.timeZoneAbbreviated;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy90aW1lem9uZS90aW1lem9uZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDO0lBS0U7Ozs7O1FBNkJBLHdCQUFtQjs7O1FBQUc7WUFDWixJQUFBLCtDQUFLO1lBRWIsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixPQUFPLEVBQUU7cUJBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDVixHQUFHOzs7O2dCQUFDLFVBQUMsRUFBTzt3QkFBUCwwQkFBTyxFQUFOLGFBQUs7b0JBQU0sT0FBQSxLQUFLO2dCQUFMLENBQUssRUFBQztxQkFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtRQUNILENBQUMsRUFBQztJQXZDRixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7OztJQUNILDhCQUFROzs7Ozs7O0lBQVIsVUFBUyxJQUFJLEVBQUUsSUFBSTs7O1lBRWIsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDOztZQUMvQixNQUFNLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxFQUFFOzs7Ozs7WUFLcEMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUV2RCw0Q0FBNEM7UUFDNUMsd0JBQXdCO1FBQ3hCLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQW1CRDs7O09BR0c7Ozs7O0lBQ0gsbUNBQWE7Ozs7SUFBYjs7WUFDTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7O1lBRWpCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztZQUMzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVuQyxPQUFPLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELHlCQUFHOzs7O0lBQUgsVUFBSSxLQUFLO1FBQ1AsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUMsQ0FBQzs7Z0JBaEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3NCQUxEO0NBb0VDLEFBakVELElBaUVDO1NBOURZLFdBQVc7Ozs7Ozs7SUErQnRCLDBDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRpbWV6b25lQ2FsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZmluZyBjdXJyZW50IGxvY2F0aW9uIHRpbWVcbiAgICogXG4gICAqIEBwYXJhbSBkYXRlIGV2ZW50IGRhdGVcbiAgICogQHBhcmFtIHRpbWUgZXZlbnQgdGltZVxuICAgKiBAcmV0dXJucyBsb2NhdGlvbiBiYXNlIGRhdGUgJiB0aW1lXG4gICAqL1xuICBjYWxjVGltZShkYXRlLCB0aW1lKSB7XG4gICAgLy8gY3JlYXRlIERhdGUgb2JqZWN0IGZvciBjdXJyZW50IGxvY2F0aW9uXG4gICAgbGV0IGQgPSBuZXcgRGF0ZShkYXRlICsgXCIgXCIgKyB0aW1lKTtcbiAgICBsZXQgb2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gLTYwO1xuICAgIC8vYWxlcnQoZGF0ZSArICcgLSAnICsgdGltZSk7XG4gICAgLy8gY29udmVydCB0byBtc2VjXG4gICAgLy8gYWRkIGxvY2FsIHRpbWUgem9uZSBvZmZzZXRcbiAgICAvLyBnZXQgVVRDIHRpbWUgaW4gbXNlY1xuICAgIGxldCB1dGMgPSBkLmdldFRpbWUoKSArIChkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IERhdGUgb2JqZWN0IGZvciBkaWZmZXJlbnQgY2l0eVxuICAgIC8vIHVzaW5nIHN1cHBsaWVkIG9mZnNldFxuICAgIHJldHVybiBuZXcgRGF0ZSh1dGMgKyAoMzYwMDAwMCAqIG9mZnNldCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvciBnZXQgdGltZXpvbmUgY29kZVxuICAgKiBAcmV0dXJucyBzdHJpbmcgKEVnIDogSVNUKVxuICAgKi9cbiAgdGltZVpvbmVBYmJyZXZpYXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IDE6IHR6IH0gPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkubWF0Y2goL1xcKCguKylcXCkvKTtcblxuICAgIGlmICh0ei5pbmNsdWRlcyhcIiBcIikpIHtcbiAgICAgIHJldHVybiB0elxuICAgICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAgIC5tYXAoKFtmaXJzdF0pID0+IGZpcnN0KVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHR6O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVG8gZ2V0IHRpbWUgb2Zmc2V0XG4gICAqIEByZXR1cm5zIG9mZnNldCAoZWcgKzUuMzAgZXRjKVxuICAgKi9cbiAgZ2V0VGltZU9mZnNldCgpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICB2YXIgc2lnbiA9IChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgPiAwKSA/IFwiLVwiIDogXCIrXCI7XG4gICAgdmFyIG9mZnNldCA9IE1hdGguYWJzKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgdmFyIGhvdXJzID0gdGhpcy5wYWQoTWF0aC5mbG9vcihvZmZzZXQgLyA2MCkpO1xuICAgIHZhciBtaW51dGVzID0gdGhpcy5wYWQob2Zmc2V0ICUgNjApO1xuXG4gICAgcmV0dXJuIHNpZ24gKyBob3VycyArIFwiOlwiICsgbWludXRlcztcbiAgfVxuXG4gIHBhZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDEwID8gJzAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfVxufVxuIl19