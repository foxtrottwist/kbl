export const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const modifiers = ['Alt', 'Cmd', 'Ctrl', 'Shift'];

export const spacings = [
  'BkSp',
  'Enter',
  'Esc',
  'Space',
  'Tab',
  entityToChar('&larr;'),
  entityToChar('&uarr;'),
  entityToChar('&rarr;'),
  entityToChar('&darr;'),
];

export const symbols = [
  '`',
  '~',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '\\',
  '|',
  ';',
  ':',
  "'",
  '"',
  ',',
  '<',
  '.',
  '>',
  '/',
  '?',
];

function entityToChar(str: string) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = str;
  return textarea.value;
}
