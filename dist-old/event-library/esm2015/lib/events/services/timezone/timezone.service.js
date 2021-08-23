/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/services/timezone/timezone.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TimezoneCal {
    constructor() {
        /**
         * For get timezone code
         * @return string (Eg : IST)
         */
        this.timeZoneAbbreviated = (/**
         * @return {?}
         */
        () => {
            const { 1: tz } = new Date().toString().match(/\((.+)\)/);
            if (tz.includes(" ")) {
                return tz
                    .split(" ")
                    .map((/**
                 * @param {?} __0
                 * @return {?}
                 */
                ([first]) => first))
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
     * @param {?} date event date
     * @param {?} time event time
     * @return {?} location base date & time
     */
    calcTime(date, time) {
        // create Date object for current location
        /** @type {?} */
        let d = new Date(date + " " + time);
        /** @type {?} */
        let offset = d.getTimezoneOffset() / -60;
        //alert(date + ' - ' + time);
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        /** @type {?} */
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        return new Date(utc + (3600000 * offset));
    }
    /**
     * To get time offset
     * @return {?} offset (eg +5.30 etc)
     */
    getTimeOffset() {
        /** @type {?} */
        let date = new Date();
        /** @type {?} */
        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        /** @type {?} */
        var offset = Math.abs(date.getTimezoneOffset());
        /** @type {?} */
        var hours = this.pad(Math.floor(offset / 60));
        /** @type {?} */
        var minutes = this.pad(offset % 60);
        return sign + hours + ":" + minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pad(value) {
        return value < 10 ? '0' + value : value;
    }
}
TimezoneCal.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TimezoneCal.ctorParameters = () => [];
/** @nocollapse */ TimezoneCal.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TimezoneCal_Factory() { return new TimezoneCal(); }, token: TimezoneCal, providedIn: "root" });
if (false) {
    /**
     * For get timezone code
     * \@return string (Eg : IST)
     * @type {?}
     */
    TimezoneCal.prototype.timeZoneAbbreviated;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9zZXJ2aWNlcy90aW1lem9uZS90aW1lem9uZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLFdBQVc7SUFFdEI7Ozs7O1FBNkJBLHdCQUFtQjs7O1FBQUcsR0FBRyxFQUFFO2tCQUNuQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFFekQsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwQixPQUFPLEVBQUU7cUJBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDVixHQUFHOzs7O2dCQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFDO3FCQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxFQUFDO0lBdkNGLENBQUM7Ozs7Ozs7O0lBU0QsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJOzs7WUFFYixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7O1lBQy9CLE1BQU0sR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEVBQUU7Ozs7OztZQUtwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsS0FBSyxDQUFDO1FBRXZELDRDQUE0QztRQUM1Qyx3QkFBd0I7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQXVCRCxhQUFhOztZQUNQLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTs7WUFFakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzs7WUFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O1lBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztZQUN6QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRW5DLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEtBQUs7UUFDUCxPQUFPLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxQyxDQUFDOzs7WUFoRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7OztJQWdDQywwQ0FXRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lem9uZUNhbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICAvKipcbiAgICogRm9yIGZpbmcgY3VycmVudCBsb2NhdGlvbiB0aW1lXG4gICAqIFxuICAgKiBAcGFyYW0gZGF0ZSBldmVudCBkYXRlXG4gICAqIEBwYXJhbSB0aW1lIGV2ZW50IHRpbWVcbiAgICogQHJldHVybnMgbG9jYXRpb24gYmFzZSBkYXRlICYgdGltZVxuICAgKi9cbiAgY2FsY1RpbWUoZGF0ZSwgdGltZSkge1xuICAgIC8vIGNyZWF0ZSBEYXRlIG9iamVjdCBmb3IgY3VycmVudCBsb2NhdGlvblxuICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSArIFwiIFwiICsgdGltZSk7XG4gICAgbGV0IG9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIC02MDtcbiAgICAvL2FsZXJ0KGRhdGUgKyAnIC0gJyArIHRpbWUpO1xuICAgIC8vIGNvbnZlcnQgdG8gbXNlY1xuICAgIC8vIGFkZCBsb2NhbCB0aW1lIHpvbmUgb2Zmc2V0XG4gICAgLy8gZ2V0IFVUQyB0aW1lIGluIG1zZWNcbiAgICBsZXQgdXRjID0gZC5nZXRUaW1lKCkgKyAoZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBEYXRlIG9iamVjdCBmb3IgZGlmZmVyZW50IGNpdHlcbiAgICAvLyB1c2luZyBzdXBwbGllZCBvZmZzZXRcbiAgICByZXR1cm4gbmV3IERhdGUodXRjICsgKDM2MDAwMDAgKiBvZmZzZXQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3IgZ2V0IHRpbWV6b25lIGNvZGVcbiAgICogQHJldHVybnMgc3RyaW5nIChFZyA6IElTVClcbiAgICovXG4gIHRpbWVab25lQWJicmV2aWF0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyAxOiB0eiB9ID0gbmV3IERhdGUoKS50b1N0cmluZygpLm1hdGNoKC9cXCgoLispXFwpLyk7XG5cbiAgICBpZiAodHouaW5jbHVkZXMoXCIgXCIpKSB7XG4gICAgICByZXR1cm4gdHpcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKChbZmlyc3RdKSA9PiBmaXJzdClcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ejtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRvIGdldCB0aW1lIG9mZnNldFxuICAgKiBAcmV0dXJucyBvZmZzZXQgKGVnICs1LjMwIGV0YylcbiAgICovXG4gIGdldFRpbWVPZmZzZXQoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgdmFyIHNpZ24gPSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpID4gMCkgPyBcIi1cIiA6IFwiK1wiO1xuICAgIHZhciBvZmZzZXQgPSBNYXRoLmFicyhkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgIHZhciBob3VycyA9IHRoaXMucGFkKE1hdGguZmxvb3Iob2Zmc2V0IC8gNjApKTtcbiAgICB2YXIgbWludXRlcyA9IHRoaXMucGFkKG9mZnNldCAlIDYwKTtcblxuICAgIHJldHVybiBzaWduICsgaG91cnMgKyBcIjpcIiArIG1pbnV0ZXM7XG4gIH1cblxuICBwYWQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAxMCA/ICcwJyArIHZhbHVlIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==