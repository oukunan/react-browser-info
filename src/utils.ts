export function getCurrentUserAgent() {
  if (/Android/i.test(navigator.userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    return 'IOS'
  }

  // iPad on iOS 13 detection
  if (/Mac/i.test(navigator.userAgent) && 'ontouchend' in document) {
    return 'IOS'
  }

  if (/Chrome/i.test(navigator.userAgent)) {
    return 'Chrome'
  }

  if (/Safari/i.test(navigator.userAgent)) {
    return 'Safari'
  }

  if (/Firefox/i.test(navigator.userAgent)) {
    return 'Firefox'
  }

  if (/Opera|OPR/i.test(navigator.userAgent)) {
    return 'Opera'
  }

  if (/MSIE/i.test(navigator.userAgent)) {
    return 'IE'
  }

  return null
}
