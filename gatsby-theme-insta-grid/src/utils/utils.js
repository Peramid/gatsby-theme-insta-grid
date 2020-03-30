export function formatNumber(num) {
  if (num >= 1000 && num < 1000000) return +(num / 1e3).toFixed(1) + "K";
  if (num >= 1000000) return +(num / 1e6).toFixed(1) + "M";
  return num;
}
