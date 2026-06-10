export function formatPrice(price: number, currency = "ETB"): string {
  const formatted = Number.isInteger(price)
    ? price.toLocaleString("en-ET")
    : price.toLocaleString("en-ET", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${formatted} ${currency}`;
}

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("251") && digits.length >= 12) {
    return `+251 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  return phone;
}
