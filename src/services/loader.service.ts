import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoaderService {
  private currentWaiter: Loading;

  constructor(
    public loadingCtrl: LoadingController,
    public translateSvc: TranslateService,
  ) {}

  public showWaiter(duration?: number) {
    this.createWaiter(duration);
    return this.currentWaiter.present();
  }

  public hideWaiter() {
    if (this.currentWaiter) {
      this.currentWaiter.dismiss();
    }
  }

  private createWaiter(duration?: number) {
    this.currentWaiter = this.loadingCtrl.create({
      content: this.translateSvc.instant('COMMUN.VEUILLEZ_PATIENTER'),
      dismissOnPageChange: true,
      duration,
    });
  }
}
