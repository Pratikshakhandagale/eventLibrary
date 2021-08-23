/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/collection-icon/collection-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
var CollectionIconComponent = /** @class */ (function () {
    function CollectionIconComponent() {
        //public showImagePicker : boolean;
        this.showImagePicker = false;
        this.iconEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CollectionIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CollectionIconComponent.prototype.initializeImagePicker = /**
     * @return {?}
     */
    function () {
        if (this.appIconConfig.isAppIconEditable) {
            this.showImagePicker = true;
        }
        else {
            this.showImagePicker = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CollectionIconComponent.prototype.collectionIconHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.iconEmitter.emit(event);
        this.appIcon = event.url;
        this.showImagePicker = false;
    };
    // dismissImageUploadModal() {
    //   this.showImagePicker = true;
    //   this.showImageUploadModal = false;
    // }
    // dismissImageUploadModal() {
    //   this.showImagePicker = true;
    //   this.showImageUploadModal = false;
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    CollectionIconComponent.prototype.handleModalDismiss = 
    // dismissImageUploadModal() {
    //   this.showImagePicker = true;
    //   this.showImageUploadModal = false;
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.showImagePicker = false;
    };
    CollectionIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-collection-icon',
                    template: "<ng-container>\n    <div (click)=\"showImagePicker = true\"\n     class=\"mb-20 w-15\">\n        <div class=\"app-icon-label\" >Icon label</div>\n        <div *ngIf='!appIcon' class=\"sb-centericon\">\n            <div>\n                <i id=\"icon_appIcon\" name=\"icon_appIcon\" class=\"icon image outline\" ></i>\n            </div>\n            <div class=\"addImageText\">Add Image</div>\n        </div>\n        <img *ngIf=\"appIcon\" \n        class=\"ui image sb-appicon\" \n        src=\"{{appIcon}}\"/>\n    </div>\n    <lib-asset-browser *ngIf=\"showImagePicker\" [showImagePicker]=\"showImagePicker\" (assetBrowserEmitter)=\"collectionIconHandler($event)\" (modalDismissEmitter)=\"handleModalDismiss($event)\"></lib-asset-browser>\n</ng-container>\n",
                    styles: [".sb-appicon{height:110px;width:120px;border:1px solid #ccc;padding:5px}.sb-centericon{height:110px;width:120px;border:1px solid #ccc;padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column}.addImageText{font-size:.8rem!important}.w-15{width:15%;max-width:15%}.app-icon-label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:600}.ui.modal{display:block!important}"]
                }] }
    ];
    /** @nocollapse */
    CollectionIconComponent.ctorParameters = function () { return []; };
    CollectionIconComponent.propDecorators = {
        iconEmitter: [{ type: Output }],
        appIcon: [{ type: Input }],
        appIconConfig: [{ type: Input }]
    };
    return CollectionIconComponent;
}());
export { CollectionIconComponent };
if (false) {
    /** @type {?} */
    CollectionIconComponent.prototype.showImagePicker;
    /** @type {?} */
    CollectionIconComponent.prototype.iconEmitter;
    /** @type {?} */
    CollectionIconComponent.prototype.showImageUploadModal;
    /** @type {?} */
    CollectionIconComponent.prototype.appIcon;
    /** @type {?} */
    CollectionIconComponent.prototype.appIconConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2NvbGxlY3Rpb24taWNvbi9jb2xsZWN0aW9uLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQ7SUFXRTs7UUFKQSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNkLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUdoQyxDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFLTSx1REFBcUI7OztJQUE1QjtRQUVFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUVELHVEQUFxQjs7OztJQUFyQixVQUFzQixLQUFLO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyx1Q0FBdUM7SUFDdkMsSUFBSTs7Ozs7Ozs7O0lBRUosb0RBQWtCOzs7Ozs7Ozs7SUFBbEIsVUFBbUIsS0FBSztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHN3QkFBK0M7O2lCQUVoRDs7Ozs7OEJBSUUsTUFBTTswQkFRTixLQUFLO2dDQUNMLEtBQUs7O0lBeUJSLDhCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FyQ1ksdUJBQXVCOzs7SUFFbEMsa0RBQXdCOztJQUN4Qiw4Q0FBZ0Q7O0lBQ2hELHVEQUE4Qjs7SUFPOUIsMENBQWlCOztJQUNqQixnREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb2xsZWN0aW9uLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sbGVjdGlvbi1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sbGVjdGlvbi1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvL3B1YmxpYyBzaG93SW1hZ2VQaWNrZXIgOiBib29sZWFuO1xuICBzaG93SW1hZ2VQaWNrZXIgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGljb25FbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHNob3dJbWFnZVVwbG9hZE1vZGFsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBASW5wdXQoKSBhcHBJY29uO1xuICBASW5wdXQoKSBhcHBJY29uQ29uZmlnO1xuICBcbiAgcHVibGljIGluaXRpYWxpemVJbWFnZVBpY2tlcigpXG4gIHtcbiAgICBpZiAodGhpcy5hcHBJY29uQ29uZmlnLmlzQXBwSWNvbkVkaXRhYmxlKSB7XG4gICAgICB0aGlzLnNob3dJbWFnZVBpY2tlciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29sbGVjdGlvbkljb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5pY29uRW1pdHRlci5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmFwcEljb24gPSBldmVudC51cmw7XG4gICAgdGhpcy5zaG93SW1hZ2VQaWNrZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGRpc21pc3NJbWFnZVVwbG9hZE1vZGFsKCkge1xuICAvLyAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gdHJ1ZTtcbiAgLy8gICB0aGlzLnNob3dJbWFnZVVwbG9hZE1vZGFsID0gZmFsc2U7XG4gIC8vIH1cbiAgIFxuICBoYW5kbGVNb2RhbERpc21pc3MoZXZlbnQpIHtcbiAgICB0aGlzLnNob3dJbWFnZVBpY2tlciA9IGZhbHNlO1xuICB9XG59XG4iXX0=