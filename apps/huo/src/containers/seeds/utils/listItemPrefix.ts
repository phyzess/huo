const romans = [
  '',
  'C',
  'CC',
  'CCC',
  'CD',
  'D',
  'DC',
  'DCC',
  'DCCC',
  'CM',
  '',
  'X',
  'XX',
  'XXX',
  'XL',
  'L',
  'LX',
  'LXX',
  'LXXX',
  'XC',
  '',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
].map((_) => _.toLowerCase());
const romanStrMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const romanize = (num: number) => {
  let digits = String(Number(num)).split('');
  let roman = '';
  let i = 3;
  while (i--) roman = (romans[Number(digits.pop()) + i * 10] || '') + roman;
  return Array(Number(digits.join('')) + 1).join('M') + roman;
};

const deromanize = (str: string) => {
  const UpperStr = str.toUpperCase();
  let validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
  let token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
  let num = 0;
  let m;
  if (!(UpperStr && validator.test(UpperStr))) return false;
  while ((m = token.exec(UpperStr))) {
    // @ts-ignore
    num += romanStrMap[m[0]];
  }
  return num;
};

/**
 * String.fromCharCode(97) => a
 */
const latinize = (siblingIndex: number) => {
  const addon = siblingIndex % 26;
  const charCode = 96 + (addon === 0 ? 26 : addon);
  return String.fromCharCode(charCode);
};

const BULLETED_PREFIX = ['•', '◦', '▪'];
const bulletedListItemPrefix = (coeff: number) => BULLETED_PREFIX[coeff % 3];

const NUMBERED_PREFIX = ['number', 'lower-latin', 'lower-roman'];
/**
 *
 * @param siblingIndex >= 1
 * @param coeff
 * @returns
 */
const numberedListItemPrefix = (siblingIndex: number, coeff: number) => {
  const type = NUMBERED_PREFIX[coeff % 3];
  switch (type) {
    case 'lower-latin':
      return latinize(siblingIndex);
    case 'lower-roman':
      return romanize(siblingIndex);
    default:
      return `${siblingIndex}.`;
  }
};

export { romanize, deromanize, bulletedListItemPrefix, numberedListItemPrefix };
