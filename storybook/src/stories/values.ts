import { Option } from "@selectoroid/model";

export const fruitOptions: readonly Option[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
  { value: "kiwi", label: "Kiwi" },
  { value: "lemon", label: "Lemon" },
  { value: "mango", label: "Mango" },
  { value: "nectarine", label: "Nectarine" },
  { value: "orange", label: "Orange" },
  { value: "papaya", label: "Papaya" },
  { value: "quince", label: "Quince" },
  { value: "raspberry", label: "Raspberry" },
  { value: "strawberry", label: "Strawberry" },
  { value: "tangerine", label: "Tangerine" },
  { value: "ugliFruit", label: "Ugli Fruit" },
  { value: "watermelon", label: "Watermelon" },
  { value: "xigua", label: "Xigua" },
  { value: "yellowPassionFruit", label: "Yellow Passion Fruit" },
  { value: "zucchini", label: "Zucchini" }, // Technically a fruit
];

export const regionOptions: readonly Option[] = [
  {
    value: "r-na",
    label: "North America",
    children: [
      { value: "US", label: "United States" },
      { value: "CA", label: "Canada" },
      { value: "MX", label: "Mexico" },
      { value: "GT", label: "Guatemala" },
      { value: "CU", label: "Cuba" },
      { value: "HT", label: "Haiti" },
      { value: "DO", label: "Dominican Republic" },
      { value: "HN", label: "Honduras" },
      { value: "SV", label: "El Salvador" },
      { value: "NI", label: "Nicaragua" },
      { value: "CR", label: "Costa Rica" },
      { value: "PA", label: "Panama" },
      { value: "JM", label: "Jamaica" },
      { value: "TT", label: "Trinidad and Tobago" },
      { value: "BS", label: "Bahamas" },
    ],
  },
  {
    value: "r-sa",
    label: "South America",
    children: [
      { value: "BR", label: "Brazil" },
      { value: "AR", label: "Argentina" },
      { value: "CO", label: "Colombia" },
      { value: "CL", label: "Chile" },
      { value: "PE", label: "Peru" },
      { value: "VE", label: "Venezuela" },
      { value: "EC", label: "Ecuador" },
      { value: "BO", label: "Bolivia" },
      { value: "PY", label: "Paraguay" },
      { value: "UY", label: "Uruguay" },
      { value: "GY", label: "Guyana" },
      { value: "SR", label: "Suriname" },
      { value: "GF", label: "French Guiana" },
    ],
  },
  {
    value: "r-eu",
    label: "Europe",
    children: [
      { value: "DE", label: "Germany" },
      { value: "FR", label: "France" },
      { value: "GB", label: "United Kingdom" },
      { value: "IT", label: "Italy" },
      { value: "ES", label: "Spain" },
      { value: "UA", label: "Ukraine" },
      { value: "PL", label: "Poland" },
      { value: "RO", label: "Romania" },
      { value: "NL", label: "Netherlands" },
      { value: "BE", label: "Belgium" },
      { value: "GR", label: "Greece" },
      { value: "CZ", label: "Czech Republic" },
      { value: "PT", label: "Portugal" },
      { value: "SE", label: "Sweden" },
      { value: "HU", label: "Hungary" },
      { value: "BY", label: "Belarus" },
      { value: "AT", label: "Austria" },
      { value: "CH", label: "Switzerland" },
      { value: "BG", label: "Bulgaria" },
      { value: "DK", label: "Denmark" },
      { value: "FI", label: "Finland" },
      { value: "SK", label: "Slovakia" },
      { value: "NO", label: "Norway" },
      { value: "IE", label: "Ireland" },
      { value: "HR", label: "Croatia" },
    ],
  },
  {
    value: "r-af",
    label: "Africa",
    children: [
      { value: "NG", label: "Nigeria" },
      { value: "ZA", label: "South Africa" },
      { value: "EG", label: "Egypt" },
      { value: "ET", label: "Ethiopia" },
      { value: "CD", label: "DR Congo" },
      { value: "TZ", label: "Tanzania" },
      { value: "KE", label: "Kenya" },
      { value: "UG", label: "Uganda" },
      { value: "SD", label: "Sudan" },
      { value: "DZ", label: "Algeria" },
      { value: "MA", label: "Morocco" },
      { value: "AO", label: "Angola" },
      { value: "GH", label: "Ghana" },
      { value: "MZ", label: "Mozambique" },
      { value: "MG", label: "Madagascar" },
      { value: "CM", label: "Cameroon" },
      { value: "CI", label: "Ivory Coast" },
      { value: "NE", label: "Niger" },
      { value: "BF", label: "Burkina Faso" },
      { value: "ML", label: "Mali" },
    ],
  },
  {
    value: "r-as",
    label: "Asia",
    children: [
      { value: "CN", label: "China" },
      { value: "IN", label: "India" },
      { value: "JP", label: "Japan" },
      { value: "ID", label: "Indonesia" },
      { value: "PK", label: "Pakistan" },
      { value: "BD", label: "Bangladesh" },
      { value: "RU", label: "Russia" },
      { value: "PH", label: "Philippines" },
      { value: "VN", label: "Vietnam" },
      { value: "TR", label: "Turkey" },
      { value: "IR", label: "Iran" },
      { value: "TH", label: "Thailand" },
      { value: "MM", label: "Myanmar" },
      { value: "KR", label: "South Korea" },
      { value: "IQ", label: "Iraq" },
      { value: "AF", label: "Afghanistan" },
      { value: "SA", label: "Saudi Arabia" },
      { value: "UZ", label: "Uzbekistan" },
      { value: "MY", label: "Malaysia" },
      { value: "YE", label: "Yemen" },
    ],
  },
  {
    value: "r-oc",
    label: "Oceania",
    children: [
      { value: "AU", label: "Australia" },
      { value: "NZ", label: "New Zealand" },
      { value: "FJ", label: "Fiji" },
      { value: "PG", label: "Papua New Guinea" },
      { value: "WS", label: "Samoa" },
      { value: "TO", label: "Tonga" },
      { value: "VU", label: "Vanuatu" },
      { value: "SB", label: "Solomon Islands" },
      { value: "FM", label: "Micronesia" },
      { value: "PW", label: "Palau" },
      { value: "NR", label: "Nauru" },
      { value: "KI", label: "Kiribati" },
      { value: "MH", label: "Marshall Islands" },
    ],
  },
  {
    value: "r-an",
    label: "Antarctica",
    children: [],
  },
];