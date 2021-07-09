import currency from 'currency.js';
export const formatCurrency = (value) =>
  currency(value, { symbol: '$', precision: 2 });
