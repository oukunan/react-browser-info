"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var breakpoint_1 = require("./breakpoint");
var getCurrentUserAgent_1 = require("./getCurrentUserAgent");
var mobile = breakpoint_1.deviceWidthBreakpoint.mobile, desktop = breakpoint_1.deviceWidthBreakpoint.desktop;
function useBrowserInfo() {
    var _a = react_1.useState(window.innerWidth), screenWidth = _a[0], setScreenWidth = _a[1];
    var setWidth = react_1.useCallback(function () {
        setScreenWidth(window.innerWidth);
    }, []);
    react_1.useEffect(function () {
        window.addEventListener('resize', setWidth, false);
        return function () { return window.removeEventListener('resize', setWidth, false); };
    }, [setWidth]);
    var isMobile = react_1.useMemo(function () { return screenWidth <= mobile.max; }, [screenWidth]);
    var isTablet = react_1.useMemo(function () { return screenWidth > mobile.max && screenWidth < desktop.min; }, [screenWidth]);
    var isDesktop = react_1.useMemo(function () { return screenWidth >= desktop.min; }, [screenWidth]);
    var isAndroid = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'Android'; }, []);
    var isIOS = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'IOS'; }, []);
    var isChrome = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'Chrome'; }, []);
    var isSafari = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'Safari'; }, []);
    var isFirefox = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'Firefox'; }, []);
    var isOpera = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'Opera'; }, []);
    var isIE = react_1.useMemo(function () { return getCurrentUserAgent_1.getCurrentUserAgent() === 'IE'; }, []);
    return react_1.useMemo(function () { return ({
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: isDesktop,
        isAndroid: isAndroid,
        isIOS: isIOS,
        isChrome: isChrome,
        isSafari: isSafari,
        isFirefox: isFirefox,
        isOpera: isOpera,
        isIE: isIE,
    }); }, [
        isMobile,
        isTablet,
        isDesktop,
        isAndroid,
        isIOS,
        isChrome,
        isSafari,
        isFirefox,
        isOpera,
        isIE,
    ]);
}
exports.default = useBrowserInfo;
