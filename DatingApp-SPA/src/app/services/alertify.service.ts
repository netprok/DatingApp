import { Injectable } from '@angular/core';
import { strictEqual } from 'assert';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, onCallBack: () => any) {
    alertify.confirm(message, function (e) {
      if (e) {
        onCallBack();
      } else {
        // do nothing
      }
    })
  }

  success(message: string) {
    alertify.success(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
