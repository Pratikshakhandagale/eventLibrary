import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
export declare class CollectionIconComponent implements OnInit {
    showImagePicker: boolean;
    iconEmitter: EventEmitter<any>;
    showImageUploadModal: boolean;
    constructor();
    ngOnInit(): void;
    appIcon: any;
    appIconConfig: any;
    initializeImagePicker(): void;
    collectionIconHandler(event: any): void;
    handleModalDismiss(event: any): void;
}
