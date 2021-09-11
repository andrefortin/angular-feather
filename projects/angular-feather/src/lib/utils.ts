/* eslint-disable prefer-arrow/prefer-arrow-functions */
export function uppercamelcase(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => firstLetter.toUpperCase())
    .replace(/[-_]/g, '');
}
