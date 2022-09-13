/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} несапраўдны.',
  required: '${path} - неабходнае поле',
  oneOf: '${path} павінна быць адным з наступных значэнняў: ${values}',
  notOneOf: '${path} не павінна быць адным з наступных значэнняў: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} павінен быць \`${type}\` тып, ` +
      `Але канчатковае значэнне было: \`${printValue(value, true)}\` \`` +
      (isCast
        ? ` (Адкінутыя ад значэння \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Калі "нулявы" прызначаны як пустое значэнне, абавязкова пазначце схему як` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} павінны быць дакладна ${length} сімвалаў',
  min: '${path} павінны быць як мінімум ${min} сімвалаў',
  max: '${path} павінны быць максімум ${max} сімвалаў',
  matches: '${path} павінен адпавядаць наступным: "${regex}" "',
  email: '${path} павінен быць сапраўдным электроннай поштай',
  url: '${path} павінен быць сапраўдным URL',
  trim: '${path} павінна быць падрэзаная радок',
  lowercase: '${path} Павінна быць з малых лтарах',
  uppercase: '${path} павінна быць з вялікіх літарах',
};

export const number: LocaleObject['number'] = {
  min: '${path} павінен быць больш або роўным ${min}',
  max: '${path} павінен быць менш або роўным ${max}',
  lessThan: '${path} павінна быць менш, чым ${less}',
  moreThan: '${path} павінна быць большым, чым ${more}',
  positive: '${path} павінна мець станоўчым лік',
  negative: '${path} павінна мець адмоўны лік',
  integer: '${path} павінна быць цэлым',
};

export const date: LocaleObject['date'] = {
  min: '${path} поле павінна быць больш, чым ${min}',
  max: '${path} поле павінна быць меньш, чым ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    "${path} поле не можа мець ключоў, якія не ўказаны ў форме аб'екта",
};

export const array: LocaleObject['array'] = {
  min: '${path} поле павінна мець па меньша за ${min} элементаў',
  max: '${path} поле павінна мець менш або ${max} элементаў',
};
