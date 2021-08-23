/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/advance-event-detail/advance-event-detail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { labelMessages } from './../labels';
import { TranslateService } from '@ngx-translate/core';
import { TimezoneCal } from '../../services/timezone/timezone.service';
export class AdvanceEventDetailComponent {
    /**
     * @param {?} translate
     * @param {?} timezoneCal
     */
    constructor(translate, timezoneCal) {
        this.translate = translate;
        this.timezoneCal = timezoneCal;
        this.labelMessages = labelMessages;
        this.isTruncate = false;
        this.timezoneshort = this.timezoneCal.timeZoneAbbreviated();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} truncate
     * @return {?}
     */
    truncateData(truncate) {
        this.isTruncate = truncate;
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    switchLang(lang) {
        this.translate.use(lang);
    }
}
AdvanceEventDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-advance-event-detail',
                template: "<div class=\"\">\n    <div>\n        <p *ngIf=\"!isTruncate\"> {{eventDetailItem?.description | slice:0:300}} <a\n                *ngIf=\"eventDetailItem?.description.length > 300\" (click)=\"truncateData(true)\">{{'SeeMore' | translate}}\n\n            </a> </p>\n        <p *ngIf=\"isTruncate\">{{eventDetailItem?.description}} <a (click)=\"truncateData(false)\">{{'LessMore' |\n                translate}}</a> </p>\n        \n\n        <div>\n            <table class=\"w-100 fs-0-92\" *ngIf=\"eventDetailItem?.eventType != 'Online'\">\n                <tr *ngIf=\"eventDetailItem?.venue\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'venue' | translate}} </span>\n                    </td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.venue.name}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationStartDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationStartDate' | translate}} </span></td>\n                    <td class=\"w-80\"> <span class=\"mr-12\">{{eventDetailItem?.registrationStartDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.registrationEndDate\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\">\n                            {{'registrationEndDate' | translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"mr-12\">{{eventDetailItem?.registrationEndDate}}&nbsp;({{timezoneshort}})</span></td>\n                </tr>\n            </table>\n\n            <table class=\"w-100\" *ngIf=\"eventDetailItem?.eventType != 'Offline'\">\n                <tr *ngIf=\"eventDetailItem?.onlineProvider\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'onlineproviderdata' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"> {{\n                            eventDetailItem?.onlineProvider}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.code\">\n                    <td class=\"w-17-5\"> <span *ngIf=\"eventDetailItem?.code\" class=\"fs-0-92 font-weight-bold\"> {{'code' |\n                            translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.code}}</span></td>\n                </tr>\n\n\n            </table>\n\n            <table class=\"w-100\">\n                <tr *ngIf=\"eventDetailItem?.language\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'language' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.language}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.keyword\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'keyword' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.keyword}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.createdFor\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'createdFor' | translate}}\n                        </span> </td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.createdFor}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.source\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold\"> {{'source' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.source}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.audience\">\n                    <td class=\"w-17-5\"> <span class=\"fs-0-92 font-weight-bold w-90\"> {{'audience' | translate}}\n                        </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\">\n                            {{eventDetailItem?.audience[0]}}</span></td>\n                </tr>\n\n                <tr *ngIf=\"eventDetailItem?.collaborators\">\n                    <td class=\"w-17-5\"><span class=\"fs-0-92 font-weight-bold\"> {{'collaborators' |\n                            translate}} </span></td>\n                    <td class=\"w-80\"><span class=\"fs-0-92 mr-12\"\n                            *ngFor=\"let collaborator of eventDetailItem?.collaborators;let i = index\"> {{i + 1}}.\n                            {{collaborator.name}}</span></td>\n                </tr>\n\n\n            </table>\n\n\n        </div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AdvanceEventDetailComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: TimezoneCal }
];
AdvanceEventDetailComponent.propDecorators = {
    eventDetailItem: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.eventDetailItem;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.labelMessages;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.isTruncate;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.timezoneshort;
    /** @type {?} */
    AdvanceEventDetailComponent.prototype.translate;
    /**
     * @type {?}
     * @private
     */
    AdvanceEventDetailComponent.prototype.timezoneCal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZS1ldmVudC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRla2RpL25ndGVrLWV2ZW50LWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZXZlbnRzL2NvbXBvbmVudHMvYWR2YW5jZS1ldmVudC1kZXRhaWwvYWR2YW5jZS1ldmVudC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFPdkUsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFLdEMsWUFDUyxTQUEyQixFQUMxQixXQUF3QjtRQUR6QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUxsQyxrQkFBYSxHQUFFLGFBQWEsQ0FBQztRQUM3QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBS3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBRTlELENBQUM7Ozs7SUFFSCxRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsUUFBUTtRQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsKytKQUFvRDs7YUFFckQ7Ozs7WUFQUSxnQkFBZ0I7WUFDaEIsV0FBVzs7OzhCQVFqQixLQUFLOzs7O0lBQU4sc0RBQThCOztJQUM5QixvREFBNkI7O0lBQzdCLGlEQUE2Qjs7SUFDN0Isb0RBQXNCOztJQUVwQixnREFBa0M7Ozs7O0lBQ2xDLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0eyBsYWJlbE1lc3NhZ2VzIH0gZnJvbSAnLi8uLi9sYWJlbHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgVGltZXpvbmVDYWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aW1lem9uZS90aW1lem9uZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItYWR2YW5jZS1ldmVudC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWR2YW5jZS1ldmVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZHZhbmNlLWV2ZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkdmFuY2VFdmVudERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGV2ZW50RGV0YWlsSXRlbTogYW55O1xuICBsYWJlbE1lc3NhZ2VzPSBsYWJlbE1lc3NhZ2VzO1xuICBpc1RydW5jYXRlIDogYm9vbGVhbiA9IGZhbHNlO1xuICB0aW1lem9uZXNob3J0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aW1lem9uZUNhbDogVGltZXpvbmVDYWwpIHsgXG4gICAgICB0aGlzLnRpbWV6b25lc2hvcnQgPSB0aGlzLnRpbWV6b25lQ2FsLnRpbWVab25lQWJicmV2aWF0ZWQoKTtcblxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHRydW5jYXRlRGF0YSh0cnVuY2F0ZSlcbiAge1xuICAgIHRoaXMuaXNUcnVuY2F0ZSA9IHRydW5jYXRlO1xuICB9XG5cbiAgc3dpdGNoTGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UobGFuZyk7XG4gIH1cbn1cbiJdfQ==