const minMaxNumericPattern = (min, max, startNumber = '[0-9]', isPhoneFormat = false) => {
    return isPhoneFormat
        ? `(^0\\d{${min},${max}})|((?!(0))\\d{${min},${max}})$`
        : `^${startNumber}[0-9]{${min - 1},${max - 1}}$`;
};

const getIbanSizeWithoutCountryCode = (fullIbanSize) => {
    return fullIbanSize - 2;
};

const alphaNumericPattern = (length) => {
    return `^[a-zA-Z0-9]{${length}}$`;
};

const minMaxAlphaNumericPattern = (min, max) => {
    return `^[a-zA-Z0-9]{${min},${max}}$`;
};

const numericPattern = (length, startNumber = '[0-9]', isPhoneFormat = false) => {
    return isPhoneFormat
        ? `(^0\\d{${length}})|((?!(0))\\d{${length}})$`
        : `^${startNumber}[0-9]{${length - 1}}$`;
};

const countries = [
  {
    country: 'Albania',
    countryCode: 'AL',
    countryCodeTelephoneNumber: '+355',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(28)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{5}$',
    phoneFormat: minMaxNumericPattern(10, 11, '0', true),
    ibanLength: 28,
  },
  {
    country: 'Andorra',
    countryCode: 'AD',
    countryCodeTelephoneNumber: '+376',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[A-Za-z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[A-Za-z]{1}$',
    phoneFormat: numericPattern(6, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Austria',
    countryCode: 'AT',
    countryCodeTelephoneNumber: '+43',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{11}$',
    accountNumberLength: 11,
    personalIdFormat: minMaxNumericPattern(10, 12),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Belarus',
    countryCode: 'BY',
    countryCodeTelephoneNumber: '+375',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(28)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: numericPattern(14),
    phoneFormat: numericPattern(12, '0', true),
    ibanLength: 28,
  },
  {
    country: 'Belgium',
    countryCode: 'BE',
    countryCodeTelephoneNumber: '+32',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(16)),
    accountNumberFormat: '^[0-9]{7}$',
    accountNumberLength: 7,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{3}[0-9]{2}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 16,
  },
  {
    country: 'Bulgaria',
    countryCode: 'BG',
    countryCodeTelephoneNumber: '+359',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(22)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$',
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 22,
  },
  {
    country: 'Bosnia and Herzegovina',
    countryCode: 'BA',
    countryCodeTelephoneNumber: '+387',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    personalIdFormat: '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{9}$',
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Croatia',
    countryCode: 'HR',
    countryCodeTelephoneNumber: '+385',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(21)),
    accountNumberFormat: '^[0-9]{10}$',
    accountNumberLength: 10,
    personalIdFormat: numericPattern(11),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 21,
  },
  {
    country: 'Cyprus',
    countryCode: 'CY',
    countryCodeTelephoneNumber: '+357',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(28)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: alphaNumericPattern(12),
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 28,
  },
  {
    country: 'Czech Republic',
    countryCode: 'CZ',
    countryCodeTelephoneNumber: '+420',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{16}$',
    accountNumberLength: 16,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$',
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Denmark',
    countryCode: 'DK',
    countryCodeTelephoneNumber: '+45',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(18)),
    accountNumberFormat: '^[0-9]{10}$',
    accountNumberLength: 10,
    personalIdFormat: '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{6}',
    phoneFormat: numericPattern(8, '0', true),
    ibanLength: 18,
  },
  {
    country: 'Estonia',
    countryCode: 'EE',
    countryCodeTelephoneNumber: '+372',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{11}$',
    accountNumberLength: 11,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{5}$',
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Finland',
    countryCode: 'FI',
    countryCodeTelephoneNumber: '+358',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(18)),
    accountNumberFormat: '^[0-9]{7}$',
    accountNumberLength: 7,
    personalIdFormat:
      '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 18,
  },
  {
    country: 'France',
    countryCode: 'FR',
    countryCodeTelephoneNumber: '+33',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(27)),
    accountNumberFormat: '^[0-9]{11}$',
    accountNumberLength: 11,
    personalIdFormat: minMaxNumericPattern(13, 15),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 27,
  },
  {
    country: 'Germany',
    countryCode: 'DE',
    countryCodeTelephoneNumber: '+49',
    ibanFormat: `^[a-zA-Z0-9]{${getIbanSizeWithoutCountryCode(22)}}$`,
    accountNumberFormat: '^[0-9]{10}$',
    accountNumberLength: 10,
    personalIdFormat: minMaxNumericPattern(10, 12),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 22,
  },
  {
    country: 'Greece',
    countryCode: 'GR',
    countryCodeTelephoneNumber: '+30',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(27)),
    accountNumberFormat: '^[0-9]{16}$',
    accountNumberLength: 16,
    personalIdFormat: numericPattern(9),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 27,
  },
  {
    country: 'Hungary',
    countryCode: 'HU',
    countryCodeTelephoneNumber: '+36',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(28)),
    accountNumberFormat: '^[0-9]{16}$',
    accountNumberLength: 16,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[A-Za-z0-9]{4}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 28,
  },
  {
    country: 'Iceland',
    countryCode: 'IS',
    countryCodeTelephoneNumber: '+354',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(26)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$',
    phoneFormat: numericPattern(7, '0', true),
    ibanLength: 26,
  },
  {
    country: 'Ireland',
    countryCode: 'IE',
    countryCodeTelephoneNumber: '+353',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: minMaxAlphaNumericPattern(7, 9),
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Italy',
    countryCode: 'IT',
    countryCodeTelephoneNumber: '+39',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(27)),
    accountNumberFormat: '^[0-9]{12}$',
    accountNumberLength: 12,
    personalIdFormat: alphaNumericPattern(16),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 27,
  },
  {
    country: 'Kosovo',
    countryCode: 'XK',
    countryCodeTelephoneNumber: '+383',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{5}$',
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Latvia',
    countryCode: 'LV',
    countryCodeTelephoneNumber: '+371',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(21)),
    accountNumberFormat: '^[0-9]{13}$',
    accountNumberLength: 13,
    personalIdFormat:
      '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{2}[0-9]{5}$',
    phoneFormat: minMaxNumericPattern(8, 9, '0', true),
    ibanLength: 21,
  },
  {
    country: 'Liechtenstein',
    countryCode: 'LI',
    countryCodeTelephoneNumber: '+423',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(21)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: '^([A-Za-z0-9]{3}{11,14}$',
    phoneFormat: minMaxNumericPattern(7, 8, '0', true),
    ibanLength: 21,
  },
  {
    country: 'Lithuania',
    countryCode: 'LT',
    countryCodeTelephoneNumber: '+370',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{11}$',
    accountNumberLength: 11,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{5}$',
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Luxembourg',
    countryCode: 'LU',
    countryCodeTelephoneNumber: '+352',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{13}$',
    accountNumberLength: 13,
    personalIdFormat: minMaxAlphaNumericPattern(13, 20),
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Malta',
    countryCode: 'MT',
    countryCodeTelephoneNumber: '+356',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(31)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: minMaxNumericPattern(9, 10),
    phoneFormat: minMaxNumericPattern(8, 9, '0', true),
    ibanLength: 31,
  },
  {
    country: 'Moldova',
    countryCode: 'MD',
    countryCodeTelephoneNumber: '+373',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: numericPattern(13),
    phoneFormat: minMaxNumericPattern(8, 9, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Monaco',
    countryCode: 'MC',
    countryCodeTelephoneNumber: '+377',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(27)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: minMaxNumericPattern(9, 11),
    phoneFormat: numericPattern(8, '0'),
    ibanLength: 27,
  },
  {
    country: 'Montenegro',
    countryCode: 'ME',
    countryCodeTelephoneNumber: '+382',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(22)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{9}$',
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 22,
  },
  {
    country: 'Netherlands',
    countryCode: 'NL',
    countryCodeTelephoneNumber: '+31',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(18)),
    accountNumberFormat: '^[0-9]{10}$',
    accountNumberLength: 10,
    personalIdFormat: minMaxNumericPattern(9, 12),
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 18,
  },
  {
    country: 'North Macedonia',
    countryCode: 'MK',
    countryCodeTelephoneNumber: '+389',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(19)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{7}$',
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 19,
  },
  {
    country: 'Norway',
    countryCode: 'NO',
    countryCodeTelephoneNumber: '+47',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(15)),
    accountNumberFormat: '^[0-9]{6}$',
    accountNumberLength: 6,
    personalIdFormat: '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{7}',
    phoneFormat: numericPattern(8, '0', true),
    ibanLength: 15,
  },
  {
    country: 'Poland',
    countryCode: 'PL',
    countryCodeTelephoneNumber: '+48',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(28)),
    accountNumberFormat: '^[0-9]{16}$',
    accountNumberLength: 16,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{5}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 28,
  },
  {
    country: 'Portugal',
    countryCode: 'PT',
    countryCodeTelephoneNumber: '+351',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(25)),
    accountNumberFormat: '^[0-9]{11}$',
    accountNumberLength: 11,
    personalIdFormat: minMaxNumericPattern(9, 12),
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 25,
  },
  {
    country: 'Romania',
    countryCode: 'RO',
    countryCodeTelephoneNumber: '+40',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{16}$',
    accountNumberLength: 16,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{8}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Russia',
    countryCode: 'RU',
    countryCodeTelephoneNumber: '+7',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(25)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: `^(${numericPattern(10)}|${numericPattern(12)}$`,
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 25,
  },
  {
    country: 'San Marino',
    countryCode: 'SM',
    countryCodeTelephoneNumber: '+378',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(20)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: alphaNumericPattern(16),
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 20,
  },
  {
    country: 'Serbia',
    countryCode: 'RS',
    countryCodeTelephoneNumber: '+381',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(22)),
    accountNumberFormat: '^[0-9]{13}$',
    accountNumberLength: 13,
    personalIdFormat: '^(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{9}$',
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 22,
  },
  {
    country: 'Slovakia',
    countryCode: 'SK',
    countryCodeTelephoneNumber: '+421',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{14}$',
    accountNumberLength: 14,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Slovenia',
    countryCode: 'SI',
    countryCodeTelephoneNumber: '+386',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(19)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat:
      '^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$',
    phoneFormat: minMaxNumericPattern(7, 8, '0', true),
    ibanLength: 19,
  },
  {
    country: 'Spain',
    countryCode: 'ES',
    countryCodeTelephoneNumber: '+34',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{10}$',
    accountNumberLength: 10,
    personalIdFormat: minMaxAlphaNumericPattern(9, 12),
    phoneFormat: numericPattern(9, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Sweden',
    countryCode: 'SE',
    countryCodeTelephoneNumber: '+46',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(24)),
    accountNumberFormat: '^[0-9]{17}$',
    accountNumberLength: 17,
    personalIdFormat: '^[0-9-+]{10,13}$',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 24,
  },
  {
    country: 'Switzerland',
    countryCode: 'CH',
    countryCodeTelephoneNumber: '+41',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(21)),
    accountNumberFormat: '^[0-9]{12}$',
    accountNumberLength: 12,
    personalIdFormat: numericPattern(13),
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 21,
  },
  {
    country: 'Turkey',
    countryCode: 'TR',
    accountNumberFormat: '^[0-9]{16}$',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(26)),
    accountNumberLength: 16,
    countryCodeTelephoneNumber: '+90',
    phoneFormat: numericPattern(10, '0', true),
    ibanLength: 26,
    personalIdFormat: numericPattern(11),
  },
  {
    country: 'United Kingdom',
    countryCode: 'GB',
    countryCodeTelephoneNumber: '+44',
    ibanFormat: alphaNumericPattern(22),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: alphaNumericPattern(9),
    phoneFormat: numericPattern(11, '0', true),
    ibanLength: 22,
  },
  {
    country: 'Ukraine',
    countryCode: 'UA',
    countryCodeTelephoneNumber: '+380',
    ibanFormat: alphaNumericPattern(getIbanSizeWithoutCountryCode(29)),
    accountNumberFormat: '^[0-9]{8}$',
    accountNumberLength: 8,
    personalIdFormat: `^(${numericPattern(10)}|${numericPattern(12)})$`,
    phoneFormat: minMaxNumericPattern(9, 10, '0', true),
    ibanLength: 29,
  },
];

export default countries;
