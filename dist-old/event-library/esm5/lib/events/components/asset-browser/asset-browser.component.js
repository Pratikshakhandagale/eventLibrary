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
var AssetBrowserComponent = /** @class */ (function () {
    function AssetBrowserComponent(imageSearchService, sbToastService) {
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
    AssetBrowserComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initialFormConfig = _.get(config, 'uploadIconFormConfig');
        this.formConfig = _.get(config, 'uploadIconFormConfig');
        //this.getMyImages();
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // if (this.modal && this.modal.deny) {
        //   this.modal.deny();
        // }
    };
    // Function to get new images
    // getmyImages()
    // {
    //  this.imageSearchService.getMyImages().subscribe(data => {
    //   this.myImages = data.result.content;
    //   });
    // }
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
    AssetBrowserComponent.prototype.getMyImages = 
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
    function (offset, query, search) {
        var _this = this;
        this.assetsCount = 0;
        if (!search) {
            this.searchMyInput = '';
        }
        if (offset === 0) {
            this.myAssets.length = 0;
        }
        /** @type {?} */
        var req = {
            filters: {
                mediaType: ['image'],
                createdBy: 1001
            },
            offset: offset
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
        function (data) {
            if (data.responseCode == "OK") {
                _this.myImages = data.result.content;
                _this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log({ err: err });
            _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    };
    /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    AssetBrowserComponent.prototype.getAllImages = /**
     * @param {?} offset
     * @param {?=} query
     * @param {?=} search
     * @return {?}
     */
    function (offset, query, search) {
        var _this = this;
        this.assetsCount = 0;
        if (!search) {
            this.searchAllInput = '';
        }
        if (offset === 0) {
            this.allImages.length = 0;
        }
        /** @type {?} */
        var req = {
            filters: {
                mediaType: ['image']
            },
            offset: offset
        };
        if (query) {
            req['query'] = query;
        }
        this.imageSearchService.getMyImages(req).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.responseCode == "OK") {
                _this.allImages = data.result.content;
                _this.assetsCount = data.result.count;
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log({ err: err });
            _this.sbToastService.showIziToastMsg(err.error.result.messages[0], 'error');
        }));
    };
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    AssetBrowserComponent.prototype.searchImages = /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    function (event, type) {
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
    };
    /**
     * @param {?} imageUrl
     * @param {?} imageId
     * @return {?}
     */
    AssetBrowserComponent.prototype.addImageInEditor = /**
     * @param {?} imageUrl
     * @param {?} imageId
     * @return {?}
     */
    function (imageUrl, imageId) {
        //console.log("img=",imageUrl);console.log("id=",imageId)
        this.appIcon = imageUrl;
        this.showImagePicker = false;
        this.assetBrowserEmitter.emit({ type: 'image', url: this.appIcon });
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.dismissImagePicker = /**
     * @return {?}
     */
    function () {
        this.showImagePicker = false;
        this.modalDismissEmitter.emit({});
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.lazyloadMyImages = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var offset = this.myImages.length;
        //this.getmyImages();
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.dismissImageUploadModal = /**
     * @return {?}
     */
    function () {
        this.showImagePicker = true;
        this.showImageUploadModal = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AssetBrowserComponent.prototype.uploadImage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log("EEEEE=",event);
        /** @type {?} */
        var file = event.target.files[0];
        /** @type {?} */
        var reader = new FileReader();
        this.formData = new FormData();
        this.formData.append('file', file);
        this.assetName = file.name;
        /** @type {?} */
        var fileType = file.type;
        /** @type {?} */
        var fileName = file.name.split('.').slice(0, -1).join('.');
        /** @type {?} */
        var fileSize = file.size / 1024 / 1024;
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
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    AssetBrowserComponent.prototype.populateFormData = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var formvalue = _.cloneDeep(this.formConfig);
        this.formConfig = null;
        _.forEach(formvalue, (/**
         * @param {?} formFieldCategory
         * @return {?}
         */
        function (formFieldCategory) {
            formFieldCategory.default = formData[formFieldCategory.code];
            formFieldCategory.editable = true;
        }));
        this.formConfig = formvalue;
    };
    /**
     * @param {?} fileName
     * @param {?} fileType
     * @param {?} mediaType
     * @return {?}
     */
    AssetBrowserComponent.prototype.generateAssetCreateRequest = /**
     * @param {?} fileName
     * @param {?} fileType
     * @param {?} mediaType
     * @return {?}
     */
    function (fileName, fileType, mediaType) {
        return {
            name: fileName,
            mediaType: mediaType,
            mimeType: fileType,
            createdBy: 1001,
            creator: "Ankita Chavan",
            // Mock Info
            channel: "01309282781705830427" //this is node ID
        };
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.resetFormData = /**
     * @return {?}
     */
    function () {
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.formConfig = this.initialFormConfig;
    };
    /**
     * @return {?}
     */
    AssetBrowserComponent.prototype.openImageUploadModal = /**
     * @return {?}
     */
    function () {
        this.showImageUploadModal = true;
        this.formData = null;
        this.formConfig = this.initialFormConfig;
        this.imageUploadLoader = false;
        this.imageFormValid = false;
        this.showErrorMsg = false;
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    AssetBrowserComponent.prototype.uploadAndUseImage = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AssetBrowserComponent.prototype.onStatusChanges = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AssetBrowserComponent.prototype.valueChanges = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    /**
     * @param {?} modal
     * @return {?}
     */
    AssetBrowserComponent.prototype.dismissPops = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        console.log("Hi close");
        this.dismissImagePicker();
        modal.deny();
    };
    AssetBrowserComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-asset-browser',
                    template: "<!-- <sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">Select Image</div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder={{configService.labelConfig?.lbl?.searchPlaceholder}} />\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">{{configService.labelConfig?.button_labels?.search_btn_label}}</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of allImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal> -->\n \n\n\n\n<sui-modal [isClosable]=\"true\" class=\"sb-modal overflow-modal\" [isInverted]=\"false\" (dismissed)=\"dismissImagePicker()\"\n  *ngIf=\"showImagePicker\" [size]=\"'normal'\" [isFullScreen]=\"false\" [mustScroll]=\"true\" #modal>\n  <div class=\"sb-modal-header\">\n    Select Image\n  </div>\n  <div class=\"sb-modal-content p-0\">\n    <sui-tabset>\n      <div class=\"sb-tabset-menu\">\n        <a class=\"sb-item\" (activate)=\"getMyImages(0)\" suiTabHeader=\"1\">My Images</a>\n        <!-- <a class=\"sb-item\" (activate)=\"getAllImages(0)\" suiTabHeader=\"2\">All Images</a> -->\n      </div>\n      <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadMyImages()\" suiTabContent=\"1\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'myImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'myImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search Btn</button>\n          </div>\n          </div>\n        <div *ngIf=\"!myImages?.length && searchMyInput\" class=\"fs-0785 my-10\"> {{emptySearchMessage}}  </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section relative position\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"ui segment sb-tabset-segment m-0 pt-15\" infiniteScroll [infiniteScrollDistance]=\"2\"\n        [infiniteScrollThrottle]=\"500\" [scrollWindow]=\"false\" (scrolled)=\"lazyloadAllImages()\" suiTabContent=\"2\">\n        <div class=\"ui  pb-16 d-flex pl-0\">\n          <div class=\"sb-search-box small no-btn\">\n            <div class=\"input-div relative\">\n              <i class=\"search icon\" aria-hidden=\"true\"></i>\n              <input (change)=\"searchImages($event, 'allImages')\" class=\"sb-search-input\" [(ngModel)]=\"searchAllInput\"\n                type=\"text\" placeholder='Search'/>\n              <i class=\"close icon\" aria-hidden=\"true\" (click)=\"searchImages('clearInput', 'allImages')\"></i>\n            </div>\n            <button class=\"sb-btn sb-btn-normal\">Search btn</button>\n          </div>\n        </div>\n        <div *ngIf=\"!myImages?.length && searchAllInput\" class=\"fs-0785\"> {{emptySearchMessage}} </div>\n        <div class=\"sb-grid-layout image\">\n          <div class=\"sb-video-content\" *ngFor=\"let data of myImages\">\n            <div class=\"sb-image-section\">\n              <img (click)=\"addImageInEditor(data.downloadUrl, data.identifier)\" alt=\"\" [src]=\"data.downloadUrl\">\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </sui-tabset>\n  </div>\n  <div class=\"sb-modal-actions flex-jc-space-end\">\n    <button (click)=\"openImageUploadModal();\" class=\"sb-btn sb-btn-primary sb-btn-normal\">Upload And Use</button>\n  </div>\n</sui-modal>\n\n<sui-modal class=\"sb-modal overflow-modal uploadPopup\" [isClosable]=\"true\" [isInverted]=\"false\"\n  (dismissed)=\"dismissImageUploadModal()\" *ngIf=\"showImageUploadModal\" [size]=\"'large'\" [isFullScreen]=\"false\"\n  [mustScroll]=\"true\" appBodyScroll #modal>\n  <div class=\"sb-modal-header\">Upload And Use</div>\n  <div class=\"p-10 sb-bg-white\">\n    <div class=\"d-flex\">\n      <div class=\"w-50\">\n        <div class=\"content\">\n          <h6 class=\"mb-8 fs-normal\">Choose or drag and drop your image here*<span class=\"red\">*</span></h6>\n          <div class=\"upload-image-modal-section d-flex flex-ai-center flex-jc-center flex-dc\">\n            <ng-container>\n              <button class=\"upload-input-button sb-btn sb-btn-success sb-btn-normal\">Upload from Computer\n                <input (change)=\"uploadImage($event)\" type=\"file\" [accept]=\"acceptImageType\" name=\"assetfile\">\n              </button>\n              <div class=\"py-10 fs-0-785 sb-color-primary\" *ngIf=\"imageUploadLoader\"> {{assetName}} </div>\n              <span class=\"fsmall mt-8\">Upload png, jpeg (Max File size: 1MB)</span>\n              <div *ngIf=\"showErrorMsg\" class=\"sb-color-error fsmall mt-8\">\n                <p>{{errorMsg}}</p>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"ui info message sb-info-bx\">\n            <ul class=\"list\">\n              <li class=\"fs-0785\">Allowed file types are: png, jpeg\n              </li>\n              <li class=\"fs-0785\">Maximum allowed file size: 1MB\n              </li>\n            </ul>\n          </div>\n          <h6 class=\"fs-0785\">Copyright & License*<span class=\"red\">*</span></h6>\n          <p class=\"fsmall mt-8 terms-and-condition\">I understand and confirm that all resources and assets created through the content editor or uploaded on the platform shall be available for free and public use without limitations on the platform (web portal, applications and any other end user interface that the platform would enable) and will be licensed under terms & conditions and policy guidelines of the platform. In doing so, the copyright and license of the original author is not infringed.</p>\n        </div>\n      </div>\n      <div class=\"w-50 pl-10 ml-10 b-bl\">\n        <div class=\"ui info message sb-info-bx mb-0\">\n          <ul class=\"list\">\n            <li class=\"fs-0785 font-weight-bold\">\n              <i class=\"icon info circle\" aria-hidden=\"true\"></i>\n              Drop or choose file to upload before entering the details\n            </li>\n          </ul>\n        </div>\n        <div class=\"sb-form-fields\">\n          <div class=\"form-container upload-form\">\n            <sb-dynamic-form [config]=\"initialFormConfig\"\n              (statusChanges)=\"onStatusChanges($event)\" (valueChanges)=\"valueChanges($event)\"></sb-dynamic-form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"sb-modal-actions flex-jc-space-between p-0\">\n      <div>\n        <button (click)=\"dismissPops(modal);\" class=\"mr-10 sb-btn sb-btn-primary sb-btn-normal\">Cancel</button>\n        <button (click)=\"uploadAndUseImage(modal);\" [disabled]=\"!imageFormValid\"\n        [ngClass]=\"{'sb-btn-primary': imageFormValid, 'sb-btn-disabled': !imageFormValid}\"\n        class=\"sb-btn  sb-btn-normal text-left\">Upload And Use</button>\n      </div>\n      <div>\n        <button (click)=\"dismissImageUploadModal();\" class=\" sb-btn sb-btn-primary sb-btn-normal\">Back</button>\n      </div>\n    </div>\n  </div>\n</sui-modal>",
                    styles: [".editorWrapper{border:0 solid #fff}.editorWrapper.hasError{border:0 solid red}.characterCount{text-align:right;border-top:0;padding-right:7px;font-size:11px;font-weight:700;margin-top:-16px;position:relative}.custom-image img{border:1px dotted;padding:7px;margin:6px;cursor:pointer}.resource-image{height:180px!important}.asset_container{overflow-y:auto;overflow-x:hidden;min-height:300px!important;max-height:300px!important;padding:5px}.insert-image-btn{position:absolute;z-index:1;left:315px;background-color:transparent;padding:12px 14px!important;margin-left:6px}.insert-image-btn>.icon{opacity:1}.insert-image-btn:active{background-color:transparent}.upload-file-description p{color:#999}.upload-file-description ul{margin:0;list-style:disc}.upload-file-description ul li{margin-bottom:8px}.upload-file-description ul li a{cursor:pointer;font-size:12px}.sb-grid-layout{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));grid-gap:16px}.sb-grid-layout.image{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}.sb-grid-layout.video{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.sb-grid-layout .sb-video-content .sb-image-section{height:96px;overflow:hidden;border-radius:4px;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.5)}.sb-grid-layout .sb-video-content .sb-image-section img{width:100%;height:100%;cursor:pointer}.overlay-image{width:100%;height:100%;background:rgba(0,0,0,.3);position:absolute;left:0;right:0;cursor:pointer}.overlay-image .play.icon{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;color:rgba(255,255,255,.6);font-size:32px;cursor:pointer}.upload-image-modal-section{border-radius:4px;width:100%;min-height:140px;background:#f5f9fc;border:1px dashed #024f9d}.upload-file-section{display:flex;height:240px;width:100%;max-width:800px;align-items:center;justify-content:center;flex-direction:column;margin:0 auto;background-color:#f5f9fc;border:1px dashed #80a7ce}.qq-uploader.qq-uploader-selector.custom-qq-uploader{background:inherit;border:none;max-height:inherit;min-height:inherit;overflow-y:inherit;width:688px;height:240px;display:flex;justify-content:center;align-items:center}.terms-and-condition{line-height:14px}.red{color:red}.b-bl{border-left:1px solid #e4e1e1}.sb-color-grey{color:#666}.flex-jc-space-end{justify-content:flex-end!important}.fs-0785{font-size:.785rem!important}.ui.info.message{color:#276f86!important}.sb-textbox[disabled=true]{opacity:.3!important;font-weight:500!important}.sb-tabset-segment{min-height:288px;max-height:288px;overflow-y:auto}input:focus-visible{border:none!important}"]
                }] }
    ];
    /** @nocollapse */
    AssetBrowserComponent.ctorParameters = function () { return [
        { type: ImageSearchService },
        { type: SbToastService }
    ]; };
    AssetBrowserComponent.propDecorators = {
        showImagePicker: [{ type: Input }],
        assetBrowserEmitter: [{ type: Output }],
        modalDismissEmitter: [{ type: Output }]
    };
    return AssetBrowserComponent;
}());
export { AssetBrowserComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQtYnJvd3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVrZGkvbmd0ZWstZXZlbnQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9ldmVudHMvY29tcG9uZW50cy9hc3NldC1icm93c2VyL2Fzc2V0LWJyb3dzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQVksTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDMUUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxDQUFDO0FBRS9CO0lBaUNFLCtCQUNVLGtCQUF1QyxFQUN2QyxjQUE4QjtRQUQ5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXFCO1FBQ3ZDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTVCOUIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBR3hELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFJWCxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUUxQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdSLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFJdkIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFFZixzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFTM0IsQ0FBQzs7OztJQUlQLHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxDQUFD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QUNsQix5Q0FBZTs7SUFDZix3Q0FBUTs7SUFDUiw0Q0FBd0I7O0lBQ3hCLDhDQUEwQjs7SUFDMUIsK0NBQTJCOztJQUMzQix5Q0FBYzs7SUFDZCwwQ0FBZTs7SUFDZixzQ0FBYzs7SUFDZCx5Q0FBcUI7O0lBQ3JCLDJDQUF1Qjs7SUFDdkIsMkNBQXVCOztJQUN2QiwwQ0FBc0I7O0lBQ3RCLDZDQUFzQjs7SUFDdEIsNENBQXNCOztJQUN0Qix5Q0FBaUI7O0lBQ2pCLGtEQUFpQzs7SUFDakMsZ0RBQXFCOztJQUNyQixrREFBOEI7O0lBQzlCLCtDQUEyQjs7SUFDM0IsbURBQXdCOzs7OztJQUd0QixtREFBK0M7Ozs7O0lBQy9DLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LE91dHB1dCxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlU2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ltYWdlLXNlYXJjaC9pbWFnZS1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTYlRvYXN0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2l6aVRvYXN0L2l6aXRvYXN0LnNlcnZpY2UnO1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vYXNzZXQtYnJvd3Nlci5kYXRhJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoLWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFzc2V0LWJyb3dzZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNzZXQtYnJvd3Nlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fzc2V0LWJyb3dzZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFzc2V0QnJvd3NlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2hvd0ltYWdlUGlja2VyO1xuICBAT3V0cHV0KCkgYXNzZXRCcm93c2VyRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbW9kYWxEaXNtaXNzRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBzaG93SW1hZ2VVcGxvYWRNb2RhbDogYm9vbGVhbjtcblxuICBpc0Nsb3NhYmxlID0gdHJ1ZTtcbiAgbXlJbWFnZXMgOiBhbnk7XG4gIGFwcEljb247XG4gIHB1YmxpYyBhc3NldHNDb3VudDogYW55O1xuICBwdWJsaWMgc2VhcmNoTXlJbnB1dCA9ICcnO1xuICBwdWJsaWMgc2VhcmNoQWxsSW5wdXQ6IGFueTtcbiAgbXlBc3NldHMgPSBbXTtcbiAgYWxsSW1hZ2VzID0gW107XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIHB1YmxpYyBmb3JtRGF0YTogYW55O1xuICBwdWJsaWMgYXNzZXN0RGF0YSA9IHt9O1xuICBwdWJsaWMgZm9ybUNvbmZpZzogYW55O1xuICBwdWJsaWMgYXNzZXROYW1lOiBhbnk7XG4gIHNob3dFcnJvck1zZzogYm9vbGVhbjtcbiAgYXNzZXRDb25maWc6IGFueSA9IHt9O1xuICBlcnJvck1zZzogc3RyaW5nO1xuICBwdWJsaWMgaW1hZ2VVcGxvYWRMb2FkZXIgPSBmYWxzZTtcbiAgYWNjZXB0SW1hZ2VUeXBlOiBhbnk7XG4gIHB1YmxpYyBpbml0aWFsRm9ybUNvbmZpZzogYW55O1xuICBwdWJsaWMgaW1hZ2VGb3JtVmFsaWQ6IGFueTtcbiAgZW1wdHlTZWFyY2hNZXNzYWdlOiBhbnk7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU2VhcmNoU2VydmljZSA6IEltYWdlU2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIHNiVG9hc3RTZXJ2aWNlOiBTYlRvYXN0U2VydmljZSxcbiAgICApIHsgfVxuXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxGb3JtQ29uZmlnID0gIF8uZ2V0KGNvbmZpZywgJ3VwbG9hZEljb25Gb3JtQ29uZmlnJyk7XG4gICAgdGhpcy5mb3JtQ29uZmlnID0gIF8uZ2V0KGNvbmZpZywgJ3VwbG9hZEljb25Gb3JtQ29uZmlnJyk7XG4gICAgLy90aGlzLmdldE15SW1hZ2VzKCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gaWYgKHRoaXMubW9kYWwgJiYgdGhpcy5tb2RhbC5kZW55KSB7XG4gICAgLy8gICB0aGlzLm1vZGFsLmRlbnkoKTtcbiAgICAvLyB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBnZXQgbmV3IGltYWdlc1xuICAvLyBnZXRteUltYWdlcygpXG4gIC8vIHtcbiAgLy8gIHRoaXMuaW1hZ2VTZWFyY2hTZXJ2aWNlLmdldE15SW1hZ2VzKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAvLyAgIHRoaXMubXlJbWFnZXMgPSBkYXRhLnJlc3VsdC5jb250ZW50O1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgZ2V0TXlJbWFnZXMob2Zmc2V0LCBxdWVyeT8sIHNlYXJjaD8pIHtcbiAgICB0aGlzLmFzc2V0c0NvdW50ID0gMDtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2hNeUlucHV0ID0gJyc7XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICAgIHRoaXMubXlBc3NldHMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgY29uc3QgcmVxID0ge1xuICAgICAgZmlsdGVyczoge1xuICAgICAgICBtZWRpYVR5cGU6IFsnaW1hZ2UnXSxcbiAgICAgICAgY3JlYXRlZEJ5OiAxMDAxXG4gICAgICB9LFxuICAgICAgb2Zmc2V0XG4gICAgfTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJlcVsncXVlcnknXSA9IHF1ZXJ5O1xuICAgIH1cbiAgICAvLyB0aGlzLnF1ZXN0aW9uU2VydmljZS5nZXRBc3NldE1lZGlhKHJlcSkucGlwZShjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgLy8gICBjb25zdCBlcnJJbmZvID0geyBlcnJvck1zZzogXy5nZXQodGhpcy5jb25maWdTZXJ2aWNlLmxhYmVsQ29uZmlnLCAnbWVzc2FnZXMuZXJyb3IuMDIyJykgfTtcbiAgICAvLyAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuZWRpdG9yU2VydmljZS5hcGlFcnJvckhhbmRsaW5nKGVyciwgZXJySW5mbykpO1xuICAgIC8vIH0pKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgIC8vICAgICB0aGlzLmFzc2V0c0NvdW50ID0gcmVzLnJlc3VsdC5jb3VudDtcbiAgICAvLyAgICAgXy5tYXAocmVzLnJlc3VsdC5jb250ZW50LCAoaXRlbSkgPT4ge1xuICAgIC8vICAgICAgIGlmIChpdGVtLmRvd25sb2FkVXJsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLm15QXNzZXRzLnB1c2goaXRlbSk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyAgIH0pO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlJlcXVlc3Q9XCIscmVxKVxuICAgIHRoaXMuaW1hZ2VTZWFyY2hTZXJ2aWNlLmdldE15SW1hZ2VzKHJlcSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5yZXNwb25zZUNvZGUgPT0gXCJPS1wiKVxuICAgICAge1xuICAgICAgICB0aGlzLm15SW1hZ2VzID0gZGF0YS5yZXN1bHQuY29udGVudDtcbiAgICAgICAgdGhpcy5hc3NldHNDb3VudCA9IGRhdGEucmVzdWx0LmNvdW50O1xuICAgICAgfVxuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgdGhpcy5zYlRvYXN0U2VydmljZS5zaG93SXppVG9hc3RNc2coZXJyLmVycm9yLnJlc3VsdC5tZXNzYWdlc1swXSwgJ2Vycm9yJyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxJbWFnZXMob2Zmc2V0LCBxdWVyeT8sIHNlYXJjaD8pIHtcbiAgICB0aGlzLmFzc2V0c0NvdW50ID0gMDtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2hBbGxJbnB1dCA9ICcnO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID09PSAwKSB7XG4gICAgICB0aGlzLmFsbEltYWdlcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBjb25zdCByZXEgPSB7XG4gICAgICBmaWx0ZXJzOiB7XG4gICAgICAgIG1lZGlhVHlwZTogWydpbWFnZSddXG4gICAgICB9LFxuICAgICAgb2Zmc2V0XG4gICAgfTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJlcVsncXVlcnknXSA9IHF1ZXJ5O1xuICAgIH1cbiAgICB0aGlzLmltYWdlU2VhcmNoU2VydmljZS5nZXRNeUltYWdlcyhyZXEpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEucmVzcG9uc2VDb2RlID09IFwiT0tcIilcbiAgICAgIHtcbiAgICAgICAgdGhpcy5hbGxJbWFnZXMgPSBkYXRhLnJlc3VsdC5jb250ZW50O1xuICAgICAgICB0aGlzLmFzc2V0c0NvdW50ID0gZGF0YS5yZXN1bHQuY291bnQ7XG4gICAgICB9XG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coeyBlcnIgfSk7XG4gICAgICB0aGlzLnNiVG9hc3RTZXJ2aWNlLnNob3dJemlUb2FzdE1zZyhlcnIuZXJyb3IucmVzdWx0Lm1lc3NhZ2VzWzBdLCAnZXJyb3InKTtcbiAgICB9KTtcbiAgfSAgXG4gIHNlYXJjaEltYWdlcyhldmVudCwgdHlwZSlcbiAge1xuXG4gICAgaWYgKGV2ZW50ID09PSAnY2xlYXJJbnB1dCcgJiYgdHlwZSA9PT0gJ215SW1hZ2VzJykge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5zZWFyY2hNeUlucHV0ID0gJyc7XG4gICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ2NsZWFySW5wdXQnICYmIHR5cGUgPT09ICdhbGxJbWFnZXMnKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gJyc7XG4gICAgICB0aGlzLnNlYXJjaEFsbElucHV0ID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnbXlJbWFnZXMnICkge1xuICAgICAgICB0aGlzLmdldE15SW1hZ2VzKDAsIHRoaXMucXVlcnksIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5nZXRBbGxJbWFnZXMoMCwgdGhpcy5xdWVyeSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW1hZ2VJbkVkaXRvcihpbWFnZVVybCwgaW1hZ2VJZCkge1xuICAgIC8vY29uc29sZS5sb2coXCJpbWc9XCIsaW1hZ2VVcmwpO2NvbnNvbGUubG9nKFwiaWQ9XCIsaW1hZ2VJZClcbiAgICB0aGlzLmFwcEljb24gPSBpbWFnZVVybDtcbiAgICB0aGlzLnNob3dJbWFnZVBpY2tlciA9IGZhbHNlO1xuICAgIHRoaXMuYXNzZXRCcm93c2VyRW1pdHRlci5lbWl0KHt0eXBlOiAnaW1hZ2UnLCB1cmw6IHRoaXMuYXBwSWNvbn0pO1xuICB9XG5cbiAgZGlzbWlzc0ltYWdlUGlja2VyKCkge1xuICAgIHRoaXMuc2hvd0ltYWdlUGlja2VyID0gZmFsc2U7XG4gICAgdGhpcy5tb2RhbERpc21pc3NFbWl0dGVyLmVtaXQoe30pXG4gIH1cblxuICBsYXp5bG9hZE15SW1hZ2VzKCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMubXlJbWFnZXMubGVuZ3RoO1xuICAgIC8vdGhpcy5nZXRteUltYWdlcygpO1xuICB9XG5cbiAgZGlzbWlzc0ltYWdlVXBsb2FkTW9kYWwoKSB7XG4gICAgdGhpcy5zaG93SW1hZ2VQaWNrZXIgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0ltYWdlVXBsb2FkTW9kYWwgPSBmYWxzZTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKGV2ZW50KVxuICB7XG4gICAgLy8gY29uc29sZS5sb2coXCJFRUVFRT1cIixldmVudCk7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuICAgIHRoaXMuYXNzZXROYW1lID0gZmlsZS5uYW1lO1xuICAgIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gZmlsZS5uYW1lLnNwbGl0KCcuJykuc2xpY2UoMCwgLTEpLmpvaW4oJy4nKTtcbiAgICBjb25zdCBmaWxlU2l6ZSA9IGZpbGUuc2l6ZSAvIDEwMjQgLyAxMDI0O1xuICAgIGlmIChmaWxlVHlwZS5zcGxpdCgnLycpWzBdID09PSAnaW1hZ2UnKVxuICAgIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnID0gZmFsc2U7XG4gICAgICBpZiAoZmlsZVNpemUgPiAxKVxuICAgICAge1xuICAgICAgICB0aGlzLnNob3dFcnJvck1zZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3JNc2cgPSAndXBsb2FkIGltYWdlIG9mIG1pbmltdW4gc2l6ZSAxTUInXG4gICAgICAgIHRoaXMuZXJyb3JNc2cgPSBcIkVycm9yXCI7XG4gICAgICAgLy90aGlzLmFzc2V0Q29uZmlnLmltYWdlLnNpemUgKyB0aGlzLmFzc2V0Q29uZmlnLmltYWdlLnNpemVUeXBlO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybURhdGEoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnID0gJyc7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTXNnID0gZmFsc2U7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIFxuICAgIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yTXNnID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXJyb3JNc2c9JydcbiAgICAvLyAgdGhpcy5lcnJvck1zZyA9IF8uZ2V0KHRoaXMuY29uZmlnU2VydmljZS5sYWJlbENvbmZpZywgJ21lc3NhZ2VzLmVycm9yLjAyMCcpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zaG93RXJyb3JNc2cpXG4gICAge1xuICAgICAgdGhpcy5pbWFnZVVwbG9hZExvYWRlciA9IHRydWU7XG4gICAgICB0aGlzLmltYWdlRm9ybVZhbGlkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXNzZXN0RGF0YSA9IHRoaXMuZ2VuZXJhdGVBc3NldENyZWF0ZVJlcXVlc3QoZmlsZU5hbWUsIGZpbGVUeXBlLCAnaW1hZ2UnKTtcbiAgICAgIHRoaXMucG9wdWxhdGVGb3JtRGF0YSh0aGlzLmFzc2VzdERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHBvcHVsYXRlRm9ybURhdGEoZm9ybURhdGEpIHtcbiAgICBjb25zdCBmb3JtdmFsdWUgPSBfLmNsb25lRGVlcCh0aGlzLmZvcm1Db25maWcpO1xuICAgIHRoaXMuZm9ybUNvbmZpZyA9IG51bGw7XG4gICAgXy5mb3JFYWNoKGZvcm12YWx1ZSwgKGZvcm1GaWVsZENhdGVnb3J5KSA9PiB7XG4gICAgICAgIGZvcm1GaWVsZENhdGVnb3J5LmRlZmF1bHQgPSBmb3JtRGF0YVtmb3JtRmllbGRDYXRlZ29yeS5jb2RlXTtcbiAgICAgICAgZm9ybUZpZWxkQ2F0ZWdvcnkuZWRpdGFibGUgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybUNvbmZpZyA9IGZvcm12YWx1ZTtcbiAgfVxuICBnZW5lcmF0ZUFzc2V0Q3JlYXRlUmVxdWVzdChmaWxlTmFtZSwgZmlsZVR5cGUsIG1lZGlhVHlwZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGZpbGVOYW1lLFxuICAgICAgICBtZWRpYVR5cGUsXG4gICAgICAgIG1pbWVUeXBlOiBmaWxlVHlwZSxcbiAgICAgICAgY3JlYXRlZEJ5OiAxMDAxLFxuICAgICAgICBjcmVhdG9yOiBcIkFua2l0YSBDaGF2YW5cIiwgLy8gTW9jayBJbmZvXG4gICAgICAgIGNoYW5uZWw6XCIwMTMwOTI4Mjc4MTcwNTgzMDQyN1wiIC8vdGhpcyBpcyBub2RlIElEXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0Rm9ybURhdGEoKSB7XG4gICAgdGhpcy5pbWFnZVVwbG9hZExvYWRlciA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1Db25maWcgPSB0aGlzLmluaXRpYWxGb3JtQ29uZmlnO1xuICB9XG5cbiAgb3BlbkltYWdlVXBsb2FkTW9kYWwoKSB7XG4gICAgdGhpcy5zaG93SW1hZ2VVcGxvYWRNb2RhbCA9IHRydWU7XG4gICAgdGhpcy5mb3JtRGF0YSA9IG51bGw7XG4gICAgdGhpcy5mb3JtQ29uZmlnID0gdGhpcy5pbml0aWFsRm9ybUNvbmZpZztcbiAgICB0aGlzLmltYWdlVXBsb2FkTG9hZGVyID0gZmFsc2U7XG4gICAgdGhpcy5pbWFnZUZvcm1WYWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd0Vycm9yTXNnID0gZmFsc2U7XG4gIH1cblxuICB1cGxvYWRBbmRVc2VJbWFnZShtb2RhbCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiLG1vZGFsKTtcbiAgLy8gICB0aGlzLmltYWdlU2VhcmNoU2VydmljZS5jcmVhdGVNZWRpYUFzc2V0KHsgY29udGVudDogdGhpcy5hc3Nlc3REYXRhIH0pLnBpcGUoY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAvLyAgICAgY29uc3QgZXJySW5mbyA9IHsgZXJyb3JNc2c6IF8uZ2V0KHRoaXMuY29uZmlnU2VydmljZS5sYWJlbENvbmZpZywgJ21lc3NhZ2VzLmVycm9yLjAxOScpIH07XG4gIC8vICAgICByZXR1cm4gdGhyb3dFcnJvcih0aGlzLmVkaXRvclNlcnZpY2UuYXBpRXJyb3JIYW5kbGluZyhlcnIsIGVyckluZm8pKTtcbiAgLy8gICB9KSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgLy8gLy8gICAgY29uc3QgaW1nSWQgPSByZXMucmVzdWx0Lm5vZGVfaWQ7XG4gIC8vICAgICBjb25zdCBpbWdJZCA9ICcwMTMwOTI4Mjc4MTcwNTgzMDQyNyc7XG4gIC8vICAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAvLyAgICAgICBkYXRhOiB0aGlzLmZvcm1EYXRhXG4gIC8vICAgICB9O1xuICAvLyAgICAgdGhpcy5pbWFnZVNlYXJjaFNlcnZpY2UudXBsb2FkTWVkaWEocmVxdWVzdCwgaW1nSWQpLnBpcGUoY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAvLyAgICAgICBjb25zdCBlcnJJbmZvID0geyBlcnJvck1zZzogXy5nZXQodGhpcy5jb25maWdTZXJ2aWNlLmxhYmVsQ29uZmlnLCAnbWVzc2FnZXMuZXJyb3IuMDE5JykgfTtcbiAgLy8gICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5lZGl0b3JTZXJ2aWNlLmFwaUVycm9ySGFuZGxpbmcoZXJyLCBlcnJJbmZvKSk7XG4gIC8vICAgICB9KSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgICB0aGlzLmFkZEltYWdlSW5FZGl0b3IocmVzcG9uc2UucmVzdWx0LmNvbnRlbnRfdXJsLCByZXNwb25zZS5yZXN1bHQubm9kZV9pZCk7XG4gIC8vICAgICAgIHRoaXMuc2hvd0ltYWdlVXBsb2FkTW9kYWwgPSBmYWxzZTtcbiAgLy8gICAgICAgdGhpcy5kaXNtaXNzUG9wcyhtb2RhbCk7XG4gIC8vICAgICB9KTtcbiAgLy8gIH0pO1xuICB9XG5cbiAgb25TdGF0dXNDaGFuZ2VzKGV2ZW50KVxuICB7XG4gIH1cblxuICB2YWx1ZUNoYW5nZXMoZXZlbnQpXG4gIHtcblxuICB9XG5cbiAgZGlzbWlzc1BvcHMobW9kYWwpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhpIGNsb3NlXCIpO1xuICAgIHRoaXMuZGlzbWlzc0ltYWdlUGlja2VyKCk7XG4gICAgbW9kYWwuZGVueSgpO1xuICB9XG59XG4iXX0=