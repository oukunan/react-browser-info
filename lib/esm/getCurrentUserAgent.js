export function getCurrentUserAgent() {
    var agent = navigator.userAgent;
    if (/Android/i.test(agent)) {
        return 'Android';
    }
    if (/iPad|iPhone|iPod/i.test(agent)) {
        return 'IOS';
    }
    // iPad on iOS 13 detection
    if (/Mac/i.test(agent) && 'ontouchend' in document) {
        return 'IOS';
    }
    if (/OPR/i.test(agent)) {
        return 'Opera';
    }
    if (/Chrome/i.test(agent)) {
        return 'Chrome';
    }
    if (/Safari/i.test(agent)) {
        return 'Safari';
    }
    if (/Firefox/i.test(agent)) {
        return 'Firefox';
    }
    if (/MSIE/i.test(agent)) {
        return 'IE';
    }
    return null;
}
