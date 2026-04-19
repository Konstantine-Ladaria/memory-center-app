import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private translate: TranslateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the current language, fallback to default
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    
    // Clone the request and add the Accept-Language header
    const localizedRequest = request.clone({
      headers: request.headers.set('Accept-Language', currentLang)
    });

    return next.handle(localizedRequest);
  }
}
