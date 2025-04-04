export const getOS = (): string => {
  const ua = navigator.userAgent;

  if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(ua)) return "macOS";
  if (/Windows NT/.test(ua)) return "Windows";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Linux/.test(ua)) return "Linux";

  return "Unknown";
};
