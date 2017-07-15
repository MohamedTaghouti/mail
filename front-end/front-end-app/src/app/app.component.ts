import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {TranslateService} from "./translate";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {

    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'French', value: 'fr' },
      { display: 'arabic', value: 'ar' },
    ];

    this.subscribeToLangChanged();

    // set language
    this._translate.setDefaultLang('en'); // set English as default
    this._translate.enableFallback(true); // enable fallback

    // set current langage
    this.selectLang('en');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }

  subscribeToLangChanged() {
    // refresh text
    // please unsubribe during destroy
    return this._translate.onLangChanged.subscribe(x => this.refreshText());
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }

}
