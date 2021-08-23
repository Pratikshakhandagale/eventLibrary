/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/collection-icon/collection-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
export class CollectionIconComponent {
    constructor() {
        //public showImagePicker : boolean;
        this.showImagePicker = false;
        this.iconEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    initializeImagePicker() {
        if (this.appIconConfig.isAppIconEditable) {
            this.showImagePicker = true;
        }
        else {
            this.showImagePicker = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    collectionIconHandler(event) {
        this.iconEmitter.emit(event);
        this.appIcon = event.url;
        this.showImagePicker = false;
    }
    // dismissImageUploadModal() {
    //   this.showImagePicker = true;
    //   this.showImageUploadModal = false;
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    handleModalDismiss(event) {
        this.showImagePicker = false;
    }
}
CollectionIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-collection-icon',
                template: "<ng-container>\n    <div (click)=\"showImagePicker = true\"\n     class=\"mb-20 w-15\">\n        <div class=\"app-icon-label\" >Icon label</div>\n        <div *ngIf='!appIcon' class=\"sb-centericon\">\n            <div>\n                <i id=\"icon_appIcon\" name=\"icon_appIcon\" class=\"icon image outline\" ></i>\n            </div>\n            <div class=\"addImageText\">Add Image</div>\n        </div>\n        <img *ngIf=\"appIcon\" \n        class=\"ui image sb-appicon\" \n        src=\"{{appIcon}}\"/>\n    </div>\n    <lib-asset-browser *ngIf=\"showImagePicker\" [showImagePicker]=\"showImagePicker\" (assetBrowserEmitter)=\"collectionIconHandler($event)\" (modalDismissEmitter)=\"handleModalDismiss($event)\"></lib-asset-browser>\n</ng-container>\n",
                styles: [".sb-appicon{height:110px;width:120px;border:1px solid #ccc;padding:5px}.sb-centericon{height:110px;width:120px;border:1px solid #ccc;padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column}.addImageText{font-size:.8rem!important}.w-15{width:15%;max-width:15%}.app-icon-label{font-size:12px!important;margin-bottom:.5rem!important;color:#121213e0;font-weight:600}.ui.modal{display:block!important}"]
            }] }
];
/** @nocollapse */
CollectionIconComponent.ctorParameters = () => [];
CollectionIconComponent.propDecorators = {
    iconEmitter: [{ type: Output }],
    appIcon: [{ type: Input }],
    appIconConfig: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWtkaS9uZ3Rlay1ldmVudC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2V2ZW50cy9jb21wb25lbnRzL2NvbGxlY3Rpb24taWNvbi9jb2xsZWN0aW9uLWljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPNUQsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQzs7UUFKQSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUNkLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUdoQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBS00scUJBQXFCO1FBRTFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7OztJQU9ELGtCQUFrQixDQUFDLEtBQUs7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixzd0JBQStDOzthQUVoRDs7Ozs7MEJBSUUsTUFBTTtzQkFRTixLQUFLOzRCQUNMLEtBQUs7Ozs7SUFWTixrREFBd0I7O0lBQ3hCLDhDQUFnRDs7SUFDaEQsdURBQThCOztJQU85QiwwQ0FBaUI7O0lBQ2pCLGdEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbGxlY3Rpb24taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xsZWN0aW9uLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xsZWN0aW9uLWljb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vcHVibGljIHNob3dJbWFnZVBpY2tlciA6IGJvb2xlYW47XG4gIHNob3dJbWFnZVBpY2tlciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgaWNvbkVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgc2hvd0ltYWdlVXBsb2FkTW9kYWw6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIGFwcEljb247XG4gIEBJbnB1dCgpIGFwcEljb25Db25maWc7XG4gIFxuICBwdWJsaWMgaW5pdGlhbGl6ZUltYWdlUGlja2VyKClcbiAge1xuICAgIGlmICh0aGlzLmFwcEljb25Db25maWcuaXNBcHBJY29uRWRpdGFibGUpIHtcbiAgICAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93SW1hZ2VQaWNrZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb2xsZWN0aW9uSWNvbkhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLmljb25FbWl0dGVyLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuYXBwSWNvbiA9IGV2ZW50LnVybDtcbiAgICB0aGlzLnNob3dJbWFnZVBpY2tlciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gZGlzbWlzc0ltYWdlVXBsb2FkTW9kYWwoKSB7XG4gIC8vICAgdGhpcy5zaG93SW1hZ2VQaWNrZXIgPSB0cnVlO1xuICAvLyAgIHRoaXMuc2hvd0ltYWdlVXBsb2FkTW9kYWwgPSBmYWxzZTtcbiAgLy8gfVxuICAgXG4gIGhhbmRsZU1vZGFsRGlzbWlzcyhldmVudCkge1xuICAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==