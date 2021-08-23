/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-list/event-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
export class EventListComponent {
    /**
     * @param {?} router
     * @param {?} translate
     */
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.paginateLimit = 5;
        this.eventDetailData = new EventEmitter();
        this.redirectToDetail = new EventEmitter();
        this.redirection = 'event';
        //translate.setDefaultLang('en');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /*onEventWrapper(identifier) {
        alert('hiii2');
        
        this.router.navigate([this.redirection], {
          queryParams: {
            identifier: identifier,
            view: 'detail'
          }
        });
      }*/
    /**
     * @param {?} res
     * @return {?}
     */
    navToEventDetail(res) {
        this.eventDetailData.emit(res);
    }
}
EventListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sb-event-list',
                template: "<div class=\" sbt-page-content-area\">\n    <div class=\"card-container\">\n        <div class=\"masonry-grid \" *ngIf=\"list\">\n            <div class=\"masonry-item\"  *ngFor=\"let event of list | paginate: { itemsPerPage: paginateLimit, currentPage: p }\">\n                <!-- <div class=\"sb-card\" (click)=\"onEventWrapper(event?.identifier);navToEventDetail(event)\" tabindex=\"0\"> -->\n\n                <div class=\"sb-card\" (click)=\"navToEventDetail(event)\" tabindex=\"0\">\n                    <div class=\"sb-card-body\">\n                        <div class=\"sb-card-metas\">\n                            <div class=\"sb-card-image mr-16\">\n                                <img src=\"./assets/images/eventcover.jpg\">\n                            </div>\n                            <div class=\"sb-card-meta course\">\n                                <div *ngIf=\"event?.audience\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'audience' | translate}}: {{event?.audience}}\n                                </div>\n                                <div *ngIf=\"event?.onlineProvider\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'eventtype' | translate}}: {{event?.onlineProvider}}\n                                </div>\n                                <div *ngIf=\"event?.status\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'Status' | translate}}: {{event?.status}}\n                                </div>\n                                <div *ngIf=\"event?.startDate\" class=\"sb-card-meta-item ellipsis mt-4\">\n                                    {{'startdate' | translate}}: {{event?.startDate}}\n                                </div>\n                            </div>\n                        </div>\n                        <h4 *ngIf=\"event?.name\" class=\"sb-card-title\">\n                            {{event?.name}}\n                        </h4>\n                        <!-- <div *ngIf=\"event?.status\" class=\"sb-card-org ellipsis \">\n                {{event?.status}} \n              </div> -->\n                        <div class=\"sb-label-status sb-label-status-success ml-auto mr-15 p-10 mt-8\">\n                            <span class=\"sb-label-status-indicator sb-label-status-indicator-success\"></span> {{event?.eventType}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n              <pagination-controls (pageChange)=\"p = $event\"  *ngIf=\"list\"></pagination-controls>        \n    </div>\n</div>",
                styles: [".card-container{margin:1.5rem}.filter-container{margin:5rem}.sb-card{margin-left:3.5rem;margin-bottom:2rem}a.disabled{color:gray;pointer-events:none;cursor:default}"]
            }] }
];
/** @nocollapse */
EventListComponent.ctorParameters = () => [
    { type: Router },
    { type: TranslateService }
];
EventListComponent.propDecorators = {
    list: [{ type: Input }],
    paginateLimit: [{ type: Input }],
    eventDetailData: [{ type: Output }],
    redirectToDetail: [{ type: Output }],
    redirection: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    EventListComponent.prototype.list;
    /** @type {?} */
    EventListComponent.prototype.paginateLimit;
    /** @type {?} */
    EventListComponent.prototype.eventDetailData;
    /** @type {?} */
    EventListComponent.prototype.redirectToDetail;
    /** @type {?} */
    EventListComponent.prototype.p;
    /** @type {?} */
    EventListComponent.prototype.redirection;
    /**
     * @type {?}
     * @private
     */
    EventListComponent.prototype.router;
    /** @type {?} */
    EventListComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvY29tcG9uZW50cy9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3ZELE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBUzdCLFlBQ1UsTUFBYyxFQUNmLFNBQTJCO1FBRDFCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVIzQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2QyxnQkFBVyxHQUFRLE9BQU8sQ0FBQztRQUtsQyxpQ0FBaUM7SUFDbkMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFhRCxnQkFBZ0IsQ0FBQyxHQUFHO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXJDSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDRsRkFBMEM7O2FBRTNDOzs7O1lBUFEsTUFBTTtZQUNOLGdCQUFnQjs7O21CQVN0QixLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsTUFBTTsrQkFDTixNQUFNOzBCQUdOLEtBQUs7Ozs7SUFOTixrQ0FBbUI7O0lBQ25CLDJDQUFtQzs7SUFDbkMsNkNBQStDOztJQUMvQyw4Q0FBZ0Q7O0lBRWhELCtCQUFPOztJQUNQLHlDQUFvQzs7Ozs7SUFFbEMsb0NBQXNCOztJQUN0Qix1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGlzdDogYW55O1xuICBASW5wdXQoKSBwYWdpbmF0ZUxpbWl0OiBudW1iZXIgPSA1O1xuICBAT3V0cHV0KCkgZXZlbnREZXRhaWxEYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVkaXJlY3RUb0RldGFpbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwOiBhbnk7XG4gIEBJbnB1dCgpIHJlZGlyZWN0aW9uOiBhbnkgPSAnZXZlbnQnO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7XG4gICAgLy90cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qb25FdmVudFdyYXBwZXIoaWRlbnRpZmllcikge1xuICAgIGFsZXJ0KCdoaWlpMicpO1xuICAgIFxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLnJlZGlyZWN0aW9uXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdmlldzogJ2RldGFpbCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfSovXG5cbiAgbmF2VG9FdmVudERldGFpbChyZXMpe1xuICAgICAgdGhpcy5ldmVudERldGFpbERhdGEuZW1pdChyZXMpO1xuICAgIH1cbn1cbiJdfQ==