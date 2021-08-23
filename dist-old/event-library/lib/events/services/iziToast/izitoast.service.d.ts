import { NgxIzitoastService } from 'ngx-izitoast';
export declare class SbToastService {
    private iziToast;
    constructor(iziToast: NgxIzitoastService);
    /**
     * For show toast message
     */
    showIziToastMsg(message: string, type: string): void;
    /**
     * Destroys IziToast
     */
    destroyIzitoast(): void;
}
