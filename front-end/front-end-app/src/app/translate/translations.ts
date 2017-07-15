/**
 * Created by mohamed on 15/07/2017.
 */

//An opaque token is an object with no application interfaces. It's a special kind of provider lookup key for use in dependency injection.
import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_FR_NAME, LANG_FR_TRANS } from './lang-fr';
import { LANG_AR_NAME, LANG_AR_TRANS } from './lang-ar';


// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_FR_NAME]: LANG_FR_TRANS,
  [LANG_AR_NAME]: LANG_AR_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];

