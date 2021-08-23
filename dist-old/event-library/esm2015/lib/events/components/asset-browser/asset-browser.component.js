/**
 * @fileoverview added by tsickle
 * Generated from: lib/events/components/asset-browser/asset-browser.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageSearchService } from '../../services/image-search/image-search.service';
import { SbToastService } from '../../services/iziToast/izitoast.service';
import { config } from './asset-browser.data';
import * as _ from 'lodash-es';
export class AssetBrowserComponent {
    /**
     * @param {?} imageSearchService
     * @param {?} sbToastService
     */
    constructor(imageSearchService, sbToastService) {
        this.imageSearchService = imageSearchService;
        this.sbToastService = sbToastService;
        this.assetBrowserEmitter = new EventEmitter();
        this.modalDismissEmitter = new EventEmitter();
        this.isClosable = true;
        this.searchMyInput = '';
        this.myAssets = [];
        this.allImages = [];
        this.assestData = {};
        this.assetConfig = {};
        this.imageUploadLoader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialFormConfig = _.get(config, 'uploadIconFormConfig');
        this.formConfig = _.get(config, 'uploadIconFormConfig');
        //this.getMyImages();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // if (this.modal && this.modal.deny) {
        //   this.modal.deny();
        // }
    }
    // Function to get new images
    // getmyImages()
    // {
    //  this.imageSearchService.getMyImages().subscribe(data => {
    //   this.myImages = data.result.content;
    //   });
    // }
    /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    getMyImages(offset, query, search) {
        this.assetsCount = 0;
        if (!search) {
            this.searchMyInput = '';
        }
        if (offset === 0) {
            this.myAssets.length = 0;
        }
        /** @type {?} */
        const req = {
            filters: {
                mediaType: ['image'],
                createdBy: 1001
            },
            offset
        };
        if (query) {
            req['query'] = query;
        }
        // this.questionService.getAssetMedia(req).pipe(catchError(err => {
        //   const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.022') };
        //   return throwError(this.editorService.apiErrorHandling(err, errInfo));
        // })).subscribe((res) => {
        //     this.assetsCount = res.result.count;
        //     _.map(res.result.content, (item) => {
        //       if (item.downloadUrl) {
        //         this.myAssets.push(item);
        //       }
        //     });
        //   });
        //console.log("Request=",req)
        this.imageSearchService.getMyImages(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode == "OK") {
                this.myImages = data.result.content;
                this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log({ err });
            this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    }
    /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    getAllImages(offset, query, search) {
        this.assetsCount = 0;
        if (!search) {
            this.searchAllInput = '';
        }
        if (offset === 0) {
            this.allImages.length = 0;
        }
        /** @type {?} */
        const req = {
            filters: {
                mediaType: ['image']
            },
            offset
        };
        if (query) {
            req['query'] = query;
        }
        this.imageSearchService.getMyImages(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data.responseCode == "OK") {
                this.allImages = data.result.content;
                this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log({ err });
            this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    }
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    searchImages(event, type) {
        if (event === 'clearInput' && type === 'myImages') {
            this.query = '';
            this.searchMyInput = '';
        }
        else if (event === 'clearInput' && type === 'allImages') {
            this.query = '';
            this.searchAllInput = '';
        }
        else {
            this.query = event.target.value;
        }
        if (type === 'myImages') {
            this.getMyImages(0, this.query, true);
        }
        else {
            //this.getAllImages(0, this.query, true);
        }
    }
    /**
     * @param {?} imageUrl
     * @param {?} imageId
     * @return {?}
     */
    addImageInEditor(imageUrl, imageId) {
        //console.log("img=",imageUrl);console.log("id=",imageId)
        this.appIcon = imageUrl;
        this.showImagePicker = false;
        this.assetBrowserEmitter.emit({ type: 'image', url: this.appIcon });
    }
    /**
     * @return {?}
     */
    dismissImagePicker() {
        this.showImagePicker = false;
        this.modalDismissEmitter.emit({});
    }
    /**
     * @return {?}
     */
    lazyloadMyImages() {
        /** @type {?} */
        const offset = this.myImages.length;
        //this.getmyImages();
    }
    /**
     * @return {?}
     */
    dismissImageUploadModal() {
        this.showImagePicker = true;
        this.showImageUploadModal = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    uploadImage(event) {
        // console.log("EEEEE=",event);
        /** @type {?} */
        const file = event.target.files[0];
        /** @type {?} */
        const reader = new FileReader();
        this.formData = new FormData();
        this.formData.append('file', file);
        this.assetName = file.name;
        /** @type {?} */
        const fileType = file.type;
        /** @type {?} */
        const fileName = file.name.split('.').slice(0, -1).join('.');
        /** @type {?} */
        const fileSize = file.size / 1024 / 1024;
        if (fileType.split('/')[0] === 'image') {
            this.showErrorMsg = false;
            if (fileSize > 1) {
                this.showErrorMsg = true;
                this.errorMsg = 'upload image of minimun size 1MB';
                this.errorMsg = "Error";
                //this.assetConfig.image.size + this.assetConfig.image.sizeType;
                this.resetFormData();
            }
            else {
                this.errorMsg = '';
                this.showErrorMsg = false;
                reader.readAsDataURL(file);
            }
        }
        else {
            this.showErrorMsg = true;
            this.errorMsg = '';
            //  this.errorMsg = _.get(this.configService.labelConfig, 'messages.error.020');
        }
        if (!this.showErrorMsg) {
            this.imageUploadLoader = true;
            this.imageFormValid = true;
            this.assestData = this.generateAssetCreateRequest(fileName, fileType, 'image');
            this.populateFormData(this.assestData);
        }
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    populateFormData(formData) {
        /** @type {?} */
        const formvalue = _.cloneDeep(this.formConfig);
        this.formConfig = null;
        _.forEach(formvalue, (/**
         * @param {?} formFieldCategory
         * @return {?}
         */
        (formFieldCategory) => {
            formFieldCategory.default = formData[formFieldCategory.code];
            formFieldCategory.editable = true;
        }));
        this.formConfig = formvalue;
    }
    /**
     * @param {?} fileName
     * @param {?} fileType
     * @param {?} mediaType
     * @return {?}
     */
    generateAssetCreateRequest(fileName, fileType, mediaType) {
        return {
            name: fileName,
            mediaType,
            mimeType: fileType,
            createdBy: 1001,
            creator: "Ankita Chavan",
            // Mock Info
            channel: "01309282781705830427" //this is node ID
        };
    }
    /**
     * @return {?}
     */
    resetFormData() {
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.formConfig = this.initialFormConfig;
    }
    /**
     * @return {?}
     */
    openImageUploadModal() {
        this.showImageUploadModal = true;
        this.formData = null;
        this.formConfig = this.initialFormConfig;
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.showErrorMsg = false;
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    uploadAndUseImage(modal) {
        console.log("here", modal);
        //   this.imageSearchService.createMediaAsset({ content: this.assestData }).pipe(catchError(err => {
        //     const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.019') };
        //     return throwError(this.editorService.apiErrorHandling(err, errInfo));
        //   })).subscribe((res) => {
        // //    const imgId = res.result.node_id;
        //     const imgId = '01309282781705830427';
        //     const request = {
        //       data: this.formData
        //     };
        //     this.imageSearchService.uploadMedia(request, imgId).pipe(catchError(err => {
        //       const errInfo = { errorMsg: _.get(this.configService.labelConfig, 'messages.error.019') };
        //       return throwError(this.editorService.apiErrorHandling(err, errInfo));
        //     })).subscribe((response) => {
        //       this.addImageInEditor(response.result.content_url, response.result.node_id);
        //       this.showImageUploadModal = false;
        //       this.dismissPops(modal);
        //     });
        //  });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onStatusChanges(event) {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    valueChanges(event) {
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    dismissPops(modal) {
        console.log("Hi close");
        this.dismissImagePicker();
        modal.deny();
    }
}
AssetBrowserComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-asset-browser',
                template: "<!-- <sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">Select Image</div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of allImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal> -->\n \n\n\n\n<sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">\n    Select Image\n  </div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <!-- <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a> -->\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'myImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'myImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search Btn</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search btn</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal>\n\n<sui-modal class=\"sb-modal overflow-modal uploadPopup\" [isClosable]=\"true\" [isInverted]=\"false\"\n  (dismissed)=\"dismissImageUploadModal()\" *ngIf=\"showImageUploadModal\" [size]=\"'large'\" [isFullScreen]=\"false\"\n  [mustScroll]=\"true\" appBodyScroll #modal>\n  <div class=\"sb-modal-header\">Upload And Use</div>\n  <div class=\"p-10 sb-bg-white\">\n    <div class=\"d-flex\">\n      <div class=\"w-50\">\n        <div class=\"content\">\n          <h6 class=\"mb-8 fs-normal\">Choose or drag and drop your image here*<span class=\"red\">*</span></h6>\n          <div class=\"upload-image-modal-section d-flex flex-ai-center flex-jc-center flex-dc\">\n            <ng-container>\n              <button class=\"upload-input-button sb-btn sb-btn-success sb-btn-normal\">Upload from Computer\n                <input (change)=\"uploadImage($event)\" type=\"file\" [accept]=\"acceptImageType\" name=\"assetfile\">\n              </button>\n              <div class=\"py-10 fs-0-785 sb-color-primary\" *ngIf=\"imageUploadLoader\"> {{assetName}} </div>\n              <span class=\"fsmall mt-8\">Upload png, jpeg (Max File size: 1MB)</span>\n              <div *ngIf=\"showErrorMsg\" class=\"sb-color-error fsmall mt-8\">\n                <p>{{errorMsg}}</p>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"ui info message sb-info-bx\">\n            <ul class=\"list\">\n              <li class=\"fs-0785\">Allowed file types are: png, jpeg\n              </li>\n              <li class=\"fs-0785\">Maximum allowed file size: 1MB\n              </li>\n            </ul>\n          </div>\n          <h6 class=\"fs-0785\">Copyright & License*<span class=\"red\">*</span></h6>\n          <p class=\"fsmall mt-8 terms-and-condition\">I understand and confirm that all resources and assets created through the content editor or uploaded on the platform shall be available for free and public use without limitations on the platform (web portal, applications and any other end user interface that the platform would enable) and will be licensed under terms & conditions and policy guidelines of the platform. In doing so, the copyright and license of the original author is not infringed.</p>\n        </div>\n      </div>\n      <div class=\"w-50 pl-10 ml-10 b-bl\">\n        <div class=\"ui info message sb-info-bx mb-0\">\n          <ul class=\"list\">\n            <li class=\"fs-0785 font-weight-bold\">\n              <i class=\"icon info circle\" aria-hidden=\"true\"></i>\n              Drop or choose file to upload before entering the details\n            </li>\n          </ul>\n        </div>\n        <div class=\"sb-form-fields\">\n          <div class=\"form-container upload-form\">\n            <sb-dynamic-form [config]=\"initialFormConfig\"\n              (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sb-modal-actions flex-jc-space-between p-0\">\n      <div>\n        <button (click)=\"dismissPops(modal);\" class=\"mr-10 sb-btn sb-btn-primary sb-btn-normal\">Cancel</button>\n        <button (click)=\"uploadAndUseImage(modal);\" [disabled]=\"!imageFormValid\"\n        [ngClass]=\"{'sb-btn-primary': imageFormValid, 'sb-btn-disabled': !imageFormValid}\"\n        class=\"sb-btn  sb-btn-normal text-left\">Upload And Use</button>\n      </div>\n      <div>\n        <button (click)=\"dismissImageUploadModal();\" class=\" sb-btn sb-btn-primary sb-btn-normal\">Back</button>\n      </div>\n    </div>\n  </div>\n</sui-modal>",
                styles: [".editorWrapper{border:0 solid #fff}.editorWrapper.hasError{border:0 solid red}.characterCount{text-align:right;border-top:0;padding-right:7px;font-size:11px;font-weight:700;margin-top:-16px;position:relative}.custom-image img{border:1px dotted;padding:7px;margin:6px;cursor:pointer}.resource-image{height:180px!important}.asset_container{overflow-y:auto;overflow-x:hidden;min-height:300px!important;max-height:300px!important;padding:5px}.insert-image-btn{position:absolute;z-index:1;left:315px;background-color:transparent;padding:12px 14px!important;margin-left:6px}.insert-image-btn>.icon{opacity:1}.insert-image-btn:active{background-color:transparent}.upload-file-description p{color:#999}.upload-file-description ul{margin:0;list-style:disc}.upload-file-description ul li{margin-bottom:8px}.upload-file-description ul li a{cursor:pointer;font-size:12px}.sb-grid-layout{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));grid-gap:16px}.sb-grid-layout.image{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}.sb-grid-layout.video{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.sb-grid-layout .sb-video-content .sb-image-section{height:96px;overflow:hidden;border-radius:4px;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.5)}.sb-grid-layout .sb-video-content .sb-image-section img{width:100%;height:100%;cursor:pointer}.overlay-image{width:100%;height:100%;background:rgba(0,0,0,.3);position:absolute;left:0;right:0;cursor:pointer}.overlay-image .play.icon{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;color:rgba(255,255,255,.6);font-size:32px;cursor:pointer}.upload-image-modal-section{border-radius:4px;width:100%;min-height:140px;background:#f5f9fc;border:1px dashed #024f9d}.upload-file-section{display:flex;height:240px;width:100%;max-width:800px;align-items:center;justify-content:center;flex-direction:column;margin:0 auto;background-color:#f5f9fc;border:1px dashed #80a7ce}.qq-uploader.qq-uploader-selector.custom-qq-uploader{background:inherit;border:none;max-height:inherit;min-height:inherit;overflow-y:inherit;width:688px;height:240px;display:flex;justify-content:center;align-items:center}.terms-and-condition{line-height:14px}.red{color:red}.b-bl{border-left:1px solid #e4e1e1}.sb-color-grey{color:#666}.flex-jc-space-end{justify-content:flex-end!important}.fs-0785{font-size:.785rem!important}.ui.info.message{color:#276f86!important}.sb-textbox[disabled=true]{opacity:.3!important;font-weight:500!important}.sb-tabset-segment{min-height:288px;max-height:288px;overflow-y:auto}input:focus-visible{border:none!important}"]
            }] }
];
/** @nocollapse */
AssetBrowserComponent.ctorParameters = () => [
    { type: ImageSearchService },
    { type: SbToastService }
];
AssetBrowserComponent.propDecorators = {
    showImagePicker: [{ type: Input }],
    assetBrowserEmitter: [{ type: Output }],
    modalDismissEmitter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AssetBrowserComponent.prototype.showImagePicker;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetBrowserEmitter;
    /** @type {?} */
    AssetBrowserComponent.prototype.modalDismissEmitter;
    /** @type {?} */
    AssetBrowserComponent.prototype.showImageUploadModal;
    /** @type {?} */
    AssetBrowserComponent.prototype.isClosable;
    /** @type {?} */
    AssetBrowserComponent.prototype.myImages;
    /** @type {?} */
    AssetBrowserComponent.prototype.appIcon;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetsCount;
    /** @type {?} */
    AssetBrowserComponent.prototype.searchMyInput;
    /** @type {?} */
    AssetBrowserComponent.prototype.searchAllInput;
    /** @type {?} */
    AssetBrowserComponent.prototype.myAssets;
    /** @type {?} */
    AssetBrowserComponent.prototype.allImages;
    /** @type {?} */
    AssetBrowserComponent.prototype.query;
    /** @type {?} */
    AssetBrowserComponent.prototype.formData;
    /** @type {?} */
    AssetBrowserComponent.prototype.assestData;
    /** @type {?} */
    AssetBrowserComponent.prototype.formConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetName;
    /** @type {?} */
    AssetBrowserComponent.prototype.showErrorMsg;
    /** @type {?} */
    AssetBrowserComponent.prototype.assetConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.errorMsg;
    /** @type {?} */
    AssetBrowserComponent.prototype.imageUploadLoader;
    /** @type {?} */
    AssetBrowserComponent.prototype.acceptImageType;
    /** @type {?} */
    AssetBrowserComponent.prototype.initialFormConfig;
    /** @type {?} */
    AssetBrowserComponent.prototype.imageFormValid;
    /** @type {?} */
    AssetBrowserComponent.prototype.emptySearchMessage;
    /**
     * @type {?}
     * @private
     */
    AssetBrowserComponent.prototype.imageSearchService;
    /**
     * @type {?}
     * @private
     */
    AssetBrowserComponent.prototype.sbToastService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtYnJvd3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvY29tcG9uZW50cy9hc3NldC1icm93c2VyL2Fzc2V0LWJyb3dzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVksTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBTy9CLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBNEJoQyxZQUNVLGtCQUF1QyxFQUN2QyxjQUE4QjtRQUQ5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTVCOUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3hELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJWCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUUxQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdSLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFJdkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFFZixzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFTM0IsQ0FBQzs7OztJQUlQLFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsc0JB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QStDOzs7OztJQUMvQywrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSxPdXRwdXQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbWFnZS1zZWFyY2gvaW1hZ2Utc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2JUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pemlUb2FzdC9peml0b2FzdC5zZXJ2aWNlJztcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuL2Fzc2V0LWJyb3dzZXIuZGF0YSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaC1lcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hc3NldC1icm93c2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fzc2V0LWJyb3dzZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hc3NldC1icm93c2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBc3NldEJyb3dzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHNob3dJbWFnZVBpY2tlcjtcbiAgQE91dHB1dCgpIGFzc2V0QnJvd3NlckVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG1vZGFsRGlzbWlzc0VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgc2hvd0ltYWdlVXBsb2FkTW9kYWw6IGJvb2xlYW47XG5cbiAgaXNDbG9zYWJsZSA9IHRydWU7XG4gIG15SW1hZ2VzIDogYW55O1xuICBhcHBJY29uO1xuICBwdWJsaWMgYXNzZXRzQ291bnQ6IGFueTtcbiAgcHVibGljIHNlYXJjaE15SW5wdXQgPSAnJztcbiAgcHVibGljIHNlYXJjaEFsbElucHV0OiBhbnk7XG4gIG15QXNzZXRzID0gW107XG4gIGFsbEltYWdlcyA9IFtdO1xuICBxdWVyeTogc3RyaW5nO1xuICBwdWJsaWMgZm9ybURhdGE6IGFueTtcbiAgcHVibGljIGFzc2VzdERhdGEgPSB7fTtcbiAgcHVibGljIGZvcm1Db25maWc6IGFueTtcbiAgcHVibGljIGFzc2V0TmFtZTogYW55O1xuICBzaG93RXJyb3JNc2c6IGJvb2xlYW47XG4gIGFzc2V0Q29uZmlnOiBhbnkgPSB7fTtcbiAgZXJyb3JNc2c6IHN0cmluZztcbiAgcHVibGljIGltYWdlVXBsb2FkTG9hZGVyID0gZmFsc2U7XG4gIGFjY2VwdEltYWdlVHlwZTogYW55O1xuICBwdWJsaWMgaW5pdGlhbEZvcm1Db25maWc6IGFueTtcbiAgcHVibGljIGltYWdlRm9ybVZhbGlkOiBhbnk7XG4gIGVtcHR5U2VhcmNoTWVzc2FnZTogYW55O1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbWFnZVNlYXJjaFNlcnZpY2UgOiBJbWFnZVNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYlRvYXN0U2VydmljZTogU2JUb2FzdFNlcnZpY2UsXG4gICAgKSB7IH1cblxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbml0aWFsRm9ybUNvbmZpZyA9ICBfLmdldChjb25maWcsICd1cGxvYWRJY29uRm9ybUNvbmZpZycpO1xuICAgIHRoaXMuZm9ybUNvbmZpZyA9ICBfLmdldChjb25maWcsICd1cGxvYWRJY29uRm9ybUNvbmZpZycpO1xuICAgIC8vdGhpcy5nZXRNeUltYWdlcygpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGlmICh0aGlzLm1vZGFsICYmIHRoaXMubW9kYWwuZGVueSkge1xuICAgIC8vICAgdGhpcy5tb2RhbC5kZW55KCk7XG4gICAgLy8gfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gZ2V0IG5ldyBpbWFnZXNcbiAgLy8gZ2V0bXlJbWFnZXMoKVxuICAvLyB7XG4gIC8vICB0aGlzLmltYWdlU2VhcmNoU2VydmljZS5nZXRNeUltYWdlcygpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgLy8gICB0aGlzLm15SW1hZ2VzID0gZGF0YS5yZXN1bHQuY29udGVudDtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGdldE15SW1hZ2VzKG9mZnNldCwgcXVlcnk/LCBzZWFyY2g/KSB7XG4gICAgdGhpcy5hc3NldHNDb3VudCA9IDA7XG4gICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoTXlJbnB1dCA9ICcnO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICB0aGlzLm15QXNzZXRzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGNvbnN0IHJlcSA9IHtcbiAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgbWVkaWFUeXBlOiBbJ2ltYWdlJ10sXG4gICAgICAgIGNyZWF0ZWRCeTogMTAwMVxuICAgICAgfSxcbiAgICAgIG9mZnNldFxuICAgIH07XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXFbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICB9XG4gICAgLy8gdGhpcy5xdWVzdGlvblNlcnZpY2UuZ2V0QXNzZXRNZWRpYShyZXEpLnBpcGUoY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgIC8vICAgY29uc3QgZXJySW5mbyA9IHsgZXJyb3JNc2c6IF8uZ2V0KHRoaXMuY29uZmlnU2VydmljZS5sYWJlbENvbmZpZywgJ21lc3NhZ2VzLmVycm9yLjAyMicpIH07XG4gICAgLy8gICByZXR1cm4gdGhyb3dFcnJvcih0aGlzLmVkaXRvclNlcnZpY2UuYXBpRXJyb3JIYW5kbGluZyhlcnIsIGVyckluZm8pKTtcbiAgICAvLyB9KSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAvLyAgICAgdGhpcy5hc3NldHNDb3VudCA9IHJlcy5yZXN1bHQuY291bnQ7XG4gICAgLy8gICAgIF8ubWFwKHJlcy5yZXN1bHQuY29udGVudCwgKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgICBpZiAoaXRlbS5kb3dubG9hZFVybCkge1xuICAgIC8vICAgICAgICAgdGhpcy5teUFzc2V0cy5wdXNoKGl0ZW0pO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcblxuICAgIC8vY29uc29sZS5sb2coXCJSZXF1ZXN0PVwiLHJlcSlcbiAgICB0aGlzLmltYWdlU2VhcmNoU2VydmljZS5nZXRNeUltYWdlcyhyZXEpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEucmVzcG9uc2VDb2RlID09IFwiT0tcIilcbiAgICAgIHtcbiAgICAgICAgdGhpcy5teUltYWdlcyA9IGRhdGEucmVzdWx0LmNvbnRlbnQ7XG4gICAgICAgIHRoaXMuYXNzZXRzQ291bnQgPSBkYXRhLnJlc3VsdC5jb3VudDtcbiAgICAgIH1cbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh7IGVyciB9KTtcbiAgICAgIHRoaXMuc2JUb2FzdFNlcnZpY2Uuc2hvd0l6aVRvYXN0TXNnKGVyci5lcnJvci5yZXN1bHQubWVzc2FnZXNbMF0sICdlcnJvcicpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsSW1hZ2VzKG9mZnNldCwgcXVlcnk/LCBzZWFyY2g/KSB7XG4gICAgdGhpcy5hc3NldHNDb3VudCA9IDA7XG4gICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoQWxsSW5wdXQgPSAnJztcbiAgICB9XG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgdGhpcy5hbGxJbWFnZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgZmlsdGVyczoge1xuICAgICAgICBtZWRpYVR5cGU6IFsnaW1hZ2UnXVxuICAgICAgfSxcbiAgICAgIG9mZnNldFxuICAgIH07XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXFbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZVNlYXJjaFNlcnZpY2UuZ2V0TXlJbWFnZXMocmVxKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3BvbnNlQ29kZSA9PSBcIk9LXCIpXG4gICAgICB7XG4gICAgICAgIHRoaXMuYWxsSW1hZ2VzID0gZGF0YS5yZXN1bHQuY29udGVudDtcbiAgICAgICAgdGhpcy5hc3NldHNDb3VudCA9IGRhdGEucmVzdWx0LmNvdW50O1xuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coZXJyLmVycm9yLnJlc3VsdC5tZXNzYWdlc1swXSwgJ2Vycm9yJyk7XG4gICAgfSk7XG4gIH0gIFxuICBzZWFyY2hJbWFnZXMoZXZlbnQsIHR5cGUpXG4gIHtcblxuICAgIGlmIChldmVudCA9PT0gJ2NsZWFySW5wdXQnICYmIHR5cGUgPT09ICdteUltYWdlcycpIHtcbiAgICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICAgIHRoaXMuc2VhcmNoTXlJbnB1dCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdjbGVhcklucHV0JyAmJiB0eXBlID09PSAnYWxsSW1hZ2VzJykge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5zZWFyY2hBbGxJbnB1dCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ215SW1hZ2VzJyApIHtcbiAgICAgICAgdGhpcy5nZXRNeUltYWdlcygwLCB0aGlzLnF1ZXJ5LCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvL3RoaXMuZ2V0QWxsSW1hZ2VzKDAsIHRoaXMucXVlcnksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEltYWdlSW5FZGl0b3IoaW1hZ2VVcmwsIGltYWdlSWQpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiaW1nPVwiLGltYWdlVXJsKTtjb25zb2xlLmxvZyhcImlkPVwiLGltYWdlSWQpXG4gICAgdGhpcy5hcHBJY29uID0gaW1hZ2VVcmw7XG4gICAgdGhpcy5zaG93SW1hZ2VQaWNrZXIgPSBmYWxzZTtcbiAgICB0aGlzLmFzc2V0QnJvd3NlckVtaXR0ZXIuZW1pdCh7dHlwZTogJ2ltYWdlJywgdXJsOiB0aGlzLmFwcEljb259KTtcbiAgfVxuXG4gIGRpc21pc3NJbWFnZVBpY2tlcigpIHtcbiAgICB0aGlzLnNob3dJbWFnZVBpY2tlciA9IGZhbHNlO1xuICAgIHRoaXMubW9kYWxEaXNtaXNzRW1pdHRlci5lbWl0KHt9KVxuICB9XG5cbiAgbGF6eWxvYWRNeUltYWdlcygpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm15SW1hZ2VzLmxlbmd0aDtcbiAgICAvL3RoaXMuZ2V0bXlJbWFnZXMoKTtcbiAgfVxuXG4gIGRpc21pc3NJbWFnZVVwbG9hZE1vZGFsKCkge1xuICAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dJbWFnZVVwbG9hZE1vZGFsID0gZmFsc2U7XG4gIH1cblxuICB1cGxvYWRJbWFnZShldmVudClcbiAge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRUVFRUU9XCIsZXZlbnQpO1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB0aGlzLmZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgdGhpcy5mb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgICB0aGlzLmFzc2V0TmFtZSA9IGZpbGUubmFtZTtcbiAgICBjb25zdCBmaWxlVHlwZSA9IGZpbGUudHlwZTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGUubmFtZS5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcuJyk7XG4gICAgY29uc3QgZmlsZVNpemUgPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNDtcbiAgICBpZiAoZmlsZVR5cGUuc3BsaXQoJy8nKVswXSA9PT0gJ2ltYWdlJylcbiAgICB7XG4gICAgICB0aGlzLnNob3dFcnJvck1zZyA9IGZhbHNlO1xuICAgICAgaWYgKGZpbGVTaXplID4gMSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNc2cgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yTXNnID0gJ3VwbG9hZCBpbWFnZSBvZiBtaW5pbXVuIHNpemUgMU1CJ1xuICAgICAgICB0aGlzLmVycm9yTXNnID0gXCJFcnJvclwiO1xuICAgICAgIC8vdGhpcy5hc3NldENvbmZpZy5pbWFnZS5zaXplICsgdGhpcy5hc3NldENvbmZpZy5pbWFnZS5zaXplVHlwZTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm1EYXRhKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZyA9ICcnO1xuICAgICAgICB0aGlzLnNob3dFcnJvck1zZyA9IGZhbHNlO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBcbiAgICB7XG4gICAgICB0aGlzLnNob3dFcnJvck1zZyA9IHRydWU7XG4gICAgICB0aGlzLmVycm9yTXNnPScnXG4gICAgLy8gIHRoaXMuZXJyb3JNc2cgPSBfLmdldCh0aGlzLmNvbmZpZ1NlcnZpY2UubGFiZWxDb25maWcsICdtZXNzYWdlcy5lcnJvci4wMjAnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2hvd0Vycm9yTXNnKVxuICAgIHtcbiAgICAgIHRoaXMuaW1hZ2VVcGxvYWRMb2FkZXIgPSB0cnVlO1xuICAgICAgdGhpcy5pbWFnZUZvcm1WYWxpZCA9IHRydWU7XG4gICAgICB0aGlzLmFzc2VzdERhdGEgPSB0aGlzLmdlbmVyYXRlQXNzZXRDcmVhdGVSZXF1ZXN0KGZpbGVOYW1lLCBmaWxlVHlwZSwgJ2ltYWdlJyk7XG4gICAgICB0aGlzLnBvcHVsYXRlRm9ybURhdGEodGhpcy5hc3Nlc3REYXRhKTtcbiAgICB9XG4gIH1cblxuICBwb3B1bGF0ZUZvcm1EYXRhKGZvcm1EYXRhKSB7XG4gICAgY29uc3QgZm9ybXZhbHVlID0gXy5jbG9uZURlZXAodGhpcy5mb3JtQ29uZmlnKTtcbiAgICB0aGlzLmZvcm1Db25maWcgPSBudWxsO1xuICAgIF8uZm9yRWFjaChmb3JtdmFsdWUsIChmb3JtRmllbGRDYXRlZ29yeSkgPT4ge1xuICAgICAgICBmb3JtRmllbGRDYXRlZ29yeS5kZWZhdWx0ID0gZm9ybURhdGFbZm9ybUZpZWxkQ2F0ZWdvcnkuY29kZV07XG4gICAgICAgIGZvcm1GaWVsZENhdGVnb3J5LmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmZvcm1Db25maWcgPSBmb3JtdmFsdWU7XG4gIH1cbiAgZ2VuZXJhdGVBc3NldENyZWF0ZVJlcXVlc3QoZmlsZU5hbWUsIGZpbGVUeXBlLCBtZWRpYVR5cGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgbWVkaWFUeXBlLFxuICAgICAgICBtaW1lVHlwZTogZmlsZVR5cGUsXG4gICAgICAgIGNyZWF0ZWRCeTogMTAwMSxcbiAgICAgICAgY3JlYXRvcjogXCJBbmtpdGEgQ2hhdmFuXCIsIC8vIE1vY2sgSW5mb1xuICAgICAgICBjaGFubmVsOlwiMDEzMDkyODI3ODE3MDU4MzA0MjdcIiAvL3RoaXMgaXMgbm9kZSBJRFxuICAgIH07XG4gIH1cblxuICByZXNldEZvcm1EYXRhKCkge1xuICAgIHRoaXMuaW1hZ2VVcGxvYWRMb2FkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmltYWdlRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtQ29uZmlnID0gdGhpcy5pbml0aWFsRm9ybUNvbmZpZztcbiAgfVxuXG4gIG9wZW5JbWFnZVVwbG9hZE1vZGFsKCkge1xuICAgIHRoaXMuc2hvd0ltYWdlVXBsb2FkTW9kYWwgPSB0cnVlO1xuICAgIHRoaXMuZm9ybURhdGEgPSBudWxsO1xuICAgIHRoaXMuZm9ybUNvbmZpZyA9IHRoaXMuaW5pdGlhbEZvcm1Db25maWc7XG4gICAgdGhpcy5pbWFnZVVwbG9hZExvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dFcnJvck1zZyA9IGZhbHNlO1xuICB9XG5cbiAgdXBsb2FkQW5kVXNlSW1hZ2UobW9kYWwpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIixtb2RhbCk7XG4gIC8vICAgdGhpcy5pbWFnZVNlYXJjaFNlcnZpY2UuY3JlYXRlTWVkaWFBc3NldCh7IGNvbnRlbnQ6IHRoaXMuYXNzZXN0RGF0YSB9KS5waXBlKGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgLy8gICAgIGNvbnN0IGVyckluZm8gPSB7IGVycm9yTXNnOiBfLmdldCh0aGlzLmNvbmZpZ1NlcnZpY2UubGFiZWxDb25maWcsICdtZXNzYWdlcy5lcnJvci4wMTknKSB9O1xuICAvLyAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lZGl0b3JTZXJ2aWNlLmFwaUVycm9ySGFuZGxpbmcoZXJyLCBlcnJJbmZvKSk7XG4gIC8vICAgfSkpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gIC8vIC8vICAgIGNvbnN0IGltZ0lkID0gcmVzLnJlc3VsdC5ub2RlX2lkO1xuICAvLyAgICAgY29uc3QgaW1nSWQgPSAnMDEzMDkyODI3ODE3MDU4MzA0MjcnO1xuICAvLyAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgLy8gICAgICAgZGF0YTogdGhpcy5mb3JtRGF0YVxuICAvLyAgICAgfTtcbiAgLy8gICAgIHRoaXMuaW1hZ2VTZWFyY2hTZXJ2aWNlLnVwbG9hZE1lZGlhKHJlcXVlc3QsIGltZ0lkKS5waXBlKGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgLy8gICAgICAgY29uc3QgZXJySW5mbyA9IHsgZXJyb3JNc2c6IF8uZ2V0KHRoaXMuY29uZmlnU2VydmljZS5sYWJlbENvbmZpZywgJ21lc3NhZ2VzLmVycm9yLjAxOScpIH07XG4gIC8vICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuZWRpdG9yU2VydmljZS5hcGlFcnJvckhhbmRsaW5nKGVyciwgZXJySW5mbykpO1xuICAvLyAgICAgfSkpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgLy8gICAgICAgdGhpcy5hZGRJbWFnZUluRWRpdG9yKHJlc3BvbnNlLnJlc3VsdC5jb250ZW50X3VybCwgcmVzcG9uc2UucmVzdWx0Lm5vZGVfaWQpO1xuICAvLyAgICAgICB0aGlzLnNob3dJbWFnZVVwbG9hZE1vZGFsID0gZmFsc2U7XG4gIC8vICAgICAgIHRoaXMuZGlzbWlzc1BvcHMobW9kYWwpO1xuICAvLyAgICAgfSk7XG4gIC8vICB9KTtcbiAgfVxuXG4gIG9uU3RhdHVzQ2hhbmdlcyhldmVudClcbiAge1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VzKGV2ZW50KVxuICB7XG5cbiAgfVxuXG4gIGRpc21pc3NQb3BzKG1vZGFsKSB7XG4gICAgY29uc29sZS5sb2coXCJIaSBjbG9zZVwiKTtcbiAgICB0aGlzLmRpc21pc3NJbWFnZVBpY2tlcigpO1xuICAgIG1vZGFsLmRlbnkoKTtcbiAgfVxufVxuIl19