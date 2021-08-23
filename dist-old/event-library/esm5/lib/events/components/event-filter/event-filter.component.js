/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/event-filter/event-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var EventFilterComponent = /** @class */ (function () {
    function EventFilterComponent(translate) {
        this.translate = translate;
        this.filterChangeEvent = new EventEmitter();
        this.isFilterShow = false;
        this.filterSelectedValues = [];
    }
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.isFilterShow = this.filterOpenStatus;
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.initializeForm = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.showfilter = /**
     * @return {?}
     */
    function () {
        this.isFilterShow = !this.isFilterShow;
        this.filterChangeEvent.emit({
            action: 'filterStatusChange',
            filterStatus: this.isFilterShow
        });
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.resetFilter = /**
     * @return {?}
     */
    function () {
        this.filterSelectedValues = [];
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.applyFilter = /**
     * @return {?}
     */
    function () {
        this.emitApplyFilter();
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.emitApplyFilter = /**
     * @return {?}
     */
    function () {
        this.filterChangeEvent.emit({
            action: 'filterDataChange',
            filter: this.filterValues,
            filtersSelected: this.filterSelectedValues,
            query: this.searchQuery
        });
        console.log('event', this.filterSelectedValues);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EventFilterComponent.prototype.outputData = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) { };
    /**
     * @param {?} $event
     * @return {?}
     */
    EventFilterComponent.prototype.onStatusChanges = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) { };
    /**
     * @param {?} $event
     * @return {?}
     */
    EventFilterComponent.prototype.valueChanges = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.filterSelectedValues = $event;
    };
    /**
     * @return {?}
     */
    EventFilterComponent.prototype.onQueryEnter = /**
     * @return {?}
     */
    function () { };
    EventFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sb-event-filter',
                    template: "<div class=\"sb-prominent-filter sb-bg-header-blue\">\n    <div class=\"ui container pt-10 pb-20\">\n        <div class=\"d-flex flex-w-wrap flex-jc-space-between flex-ai-center\">\n            <div class=\"sb-search-box  search-container small no-btn\">\n                <div class=\"input-div relative\">\n                    <i class=\"search icon\"></i>\n                    <input class=\"sb-search-input \" [(ngModel)]=\"searchQuery\" type=\"text\" (keyup.enter)=\"onQueryEnter();\" placeholder=\"Search Event\" />\n                </div>\n                <button class=\"sb-btn sb-btn-normal\">\n            {{'search' | translate}}\n          </button>\n            </div>\n\n            <div class=\"fs-0-785 cursor-pointer\" (click)=\"showfilter()\">\n                {{'changefilters' | translate}}\n                <i *ngIf=\"isFilterShow\" class=\"caret up icon\"></i>\n                <i *ngIf=\"!isFilterShow\" class=\"caret down icon\"></i>\n            </div>\n        </div>\n        <div class=\"library-filter search-container pt-16\" *ngIf=\"isFilterShow\">\n            <hr class=\"mb-20\">\n            <ng-container *ngIf=\"filterConfig\">\n                <sb-dynamic-form [config]=\"filterConfig\" (initialize)=\"outputData($event)\" (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n            </ng-container>\n            <div class=\"d-flex flex-as-center pt-10 sb-btn-cover flex-jc-space-end\">\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-outline-primary ml-5\" (click)=\"resetFilter();\">{{'reset' | translate}}</button>\n                <button type=\"button\" class=\"sb-btn sb-btn-normal sb-btn-primary ml-15\" (click)=\"applyFilter();\">{{'apply' | translate}}</button>\n            </div>\n        </div>\n    </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".two-column-grid{display:grid;grid-template-columns:repeat(2,1fr);-moz-column-gap:.5rem;column-gap:.5rem;border-bottom:solid 1px var(--gray-100)}.two-column-grid:last-child{border-bottom:none}.multi-select-container .sb-modal-dropdown-web ul{border:none!important}.list-border,.sb-textarea,.sb-textbox,.topic-picker-selector,select{border:1px solid rgba(34,36,38,.15)!important;padding:.85rem .5rem!important;border-radius:.28571429rem;font-size:.785rem!important;font-weight:500!important;height:1rem!important}label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:500}.search-container{margin-left:1rem}.sb-search-box .sb-search-input{width:auto!important}"]
                }] }
    ];
    /** @nocollapse */
    EventFilterComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    EventFilterComponent.propDecorators = {
        filterValues: [{ type: Input }],
        filterOpenStatus: [{ type: Input }],
        filterChangeEvent: [{ type: Output }],
        filterConfig: [{ type: Input }]
    };
    return EventFilterComponent;
}());
export { EventFilterComponent };
if (false) {
    /** @type {?} */
    EventFilterComponent.prototype.filterValues;
    /** @type {?} */
    EventFilterComponent.prototype.filterOpenStatus;
    /** @type {?} */
    EventFilterComponent.prototype.filterChangeEvent;
    /** @type {?} */
    EventFilterComponent.prototype.searchFilterFormConfig;
    /** @type {?} */
    EventFilterComponent.prototype.filterConfig;
    /** @type {?} */
    EventFilterComponent.prototype.isFilterShow;
    /** @type {?} */
    EventFilterComponent.prototype.filterFields;
    /** @type {?} */
    EventFilterComponent.prototype.currentFilters;
    /** @type {?} */
    EventFilterComponent.prototype.searchQuery;
    /** @type {?} */
    EventFilterComponent.prototype.filterSelectedValues;
    /** @type {?} */
    EventFilterComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2V2ZW50LWZpbHRlci9ldmVudC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQW1CRSw4QkFDUyxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQVYxQixzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk3RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUlyQix5QkFBb0IsR0FBRyxFQUFFLENBQUM7SUFJL0IsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzVDLENBQUM7Ozs7SUFDSCx1Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRUQsNkNBQWM7OztJQUFkLGNBQW1CLENBQUM7Ozs7SUFFcEIseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLEVBQUUsb0JBQW9CO1lBQzVCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFFLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQzFCLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQzFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztTQUN4QixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxNQUFNLElBQUksQ0FBQzs7Ozs7SUFFdEIsOENBQWU7Ozs7SUFBZixVQUFnQixNQUFNLElBQUksQ0FBQzs7Ozs7SUFFM0IsMkNBQVk7Ozs7SUFBWixVQUFhLE1BQU07UUFDbEIsSUFBSSxDQUFDLG9CQUFvQixHQUFJLE1BQU0sQ0FBQztJQUNyQyxDQUFDOzs7O0lBQ0QsMkNBQVk7OztJQUFaLGNBQWUsQ0FBQzs7Z0JBakVqQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsbzBEQUE0QztvQkFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnQkFQUSxnQkFBZ0I7OzsrQkFVdEIsS0FBSzttQ0FDTCxLQUFLO29DQUNMLE1BQU07K0JBR04sS0FBSzs7SUFxRFIsMkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTVEWSxvQkFBb0I7OztJQUUvQiw0Q0FBMkI7O0lBQzNCLGdEQUFtQzs7SUFDbkMsaURBQW9FOztJQUVwRSxzREFBbUM7O0lBQ25DLDRDQUEyQjs7SUFDM0IsNENBQTRCOztJQUM1Qiw0Q0FBeUI7O0lBQ3pCLDhDQUEyQjs7SUFDM0IsMkNBQTJCOztJQUMzQixvREFBaUM7O0lBRS9CLHlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ItZXZlbnQtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V2ZW50LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V2ZW50LWZpbHRlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGZpbHRlclZhbHVlczogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJPcGVuU3RhdHVzOiBib29sZWFuO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBzZWFyY2hGaWx0ZXJGb3JtQ29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogYW55O1xuICBwdWJsaWMgaXNGaWx0ZXJTaG93ID0gZmFsc2U7XG4gIHB1YmxpYyBmaWx0ZXJGaWVsZHM6IGFueTtcbiAgcHVibGljIGN1cnJlbnRGaWx0ZXJzOiBhbnk7XG4gIHB1YmxpYyBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBwdWJsaWMgZmlsdGVyU2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgY29uc3RydWN0b3IoICAgICBcbiAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuICAgIFxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgdGhpcy5pc0ZpbHRlclNob3cgPSB0aGlzLmZpbHRlck9wZW5TdGF0dXM7XG4gICAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHsgXG4gIH1cblxuICBpbml0aWFsaXplRm9ybSgpIHsgfVxuXG4gIHNob3dmaWx0ZXIoKSB7XG4gICAgdGhpcy5pc0ZpbHRlclNob3cgPSAhdGhpcy5pc0ZpbHRlclNob3c7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2VFdmVudC5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2ZpbHRlclN0YXR1c0NoYW5nZScsXG4gICAgICBmaWx0ZXJTdGF0dXM6IHRoaXMuaXNGaWx0ZXJTaG93XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLmZpbHRlclNlbGVjdGVkVmFsdWVzID1bXTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKCkge1xuICAgIHRoaXMuZW1pdEFwcGx5RmlsdGVyKCk7XG4gIH1cblxuICBlbWl0QXBwbHlGaWx0ZXIoKSB7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2VFdmVudC5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2ZpbHRlckRhdGFDaGFuZ2UnLFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclZhbHVlcyxcbiAgICAgIGZpbHRlcnNTZWxlY3RlZDogdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlcyxcbiAgICAgIHF1ZXJ5OiB0aGlzLnNlYXJjaFF1ZXJ5XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlcyk7XG4gIH1cblxuICBvdXRwdXREYXRhKCRldmVudCkgeyB9XG5cbiAgb25TdGF0dXNDaGFuZ2VzKCRldmVudCkgeyB9XG5cbiAgdmFsdWVDaGFuZ2VzKCRldmVudCkge1xuICAgdGhpcy5maWx0ZXJTZWxlY3RlZFZhbHVlcyAgPSAkZXZlbnQ7XG4gIH1cbiAgb25RdWVyeUVudGVyKCl7fVxufVxuIl19