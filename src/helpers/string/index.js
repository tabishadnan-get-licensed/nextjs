// ***** String Helpers *****
import _ from "lodash";

// ***** titleToLowerWithDashes *****
export const titleToLowerWithDashes = (string) => {
  return _?.chain(string)?.replace(/\s+/g, "-")?.toLower()?.value();
};

// ***** toTitleCase *****
export const toTitleCase = (string) => {
  const str = string?.replace(/-/g, " ");
  return _?.startCase(_?.toLower(str));
};

// ***** toCapitalize *****
export const toCapitalize = (string) => {
  const str = string?.replace(/-/g, " ");
  return _?.capitalize(str);
};

// ***** toCapitalizeFirstLetter *****
export const toCapitalizeFirstLetter = (string) => {
  const str = string?.replaceAll("-", " ");
  return _?.upperFirst(str);
};

// ***** isFloat *****
export const isFloat = (num) => {
  return _?.isNumber(num) && num % 1 !== 0;
};

// ***** getNumber *****
export const getNumber = (num) => {
  return _?.isNumber(num) ? (_?.isInteger(num) ? num : num?.toFixed(2)) : 0;
};

// ***** stringToNumber *****
export const stringToNumber = (stringValue) => {
  if (_?.isNull(stringValue)) return 0;
  const result = parseFloat(_?.replace(`${stringValue}`, /,/g, ""));
  return _?.isNumber(result) ? result : 0;
};

// ***** removeCommaSepratedString *****
export const removeCommaSepratedString = (stringValue, stringRemove) => {
  const newArray = _?.chain(stringValue)
    ?.split(",")
    ?.filter((strItem) => _?.split(strItem, ",")[0] !== stringRemove)
    ?.value();
  const newString = newArray?.join(",");
  return newString;
};

// ***** objectToParams *****
export const objectToParams = (obj) => {
  const paramString = _?.chain(obj)
    ?.map((val, key) => `${key}=${val}`)
    ?.join("&")
    ?.value();
  return paramString;
};
