import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderService {
  private currentSpinner: Loading;

  constructor(
    public loadingCtrl: LoadingController,
    public translateSvc: TranslateService,
  ) {}

  public showSpinner(duration?: number) {
    this.createSpinner(duration);
    return this.currentSpinner.present();
  }

  public hideSpinner() {
    if (this.currentSpinner) {
      this.currentSpinner.dismiss();
    }
  }

  private createSpinner(duration?: number) {
    this.currentSpinner = this.loadingCtrl.create({
      content: this.translateSvc.instant('COMMON.PLEASE_WAIT'),
      dismissOnPageChange: true,
      duration,
    });
  }
}
