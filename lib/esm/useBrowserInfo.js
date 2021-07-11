import { useEffect, useState, useMemo, useCallback } from 'react';
import { deviceWidthBreakpoint } from './breakpoint';
import { getCurrentUserAgent } from './getCurrentUserAgent';
var mobile = deviceWidthBreakpoint.mobile, desktop = deviceWidthBreakpoint.desktop;
export default function useBrowserInfo() {
    var _a = useState(window.innerWidth), screenWidth = _a[0], setScreenWidth = _a[1];
    var setWidth = useCallback(function () {
        setScreenWidth(window.innerWidth);
    }, []);
    useEffect(function () {
        window.addEventListener('resize', setWidth, false);
        return function () { return window.removeEventListener('resize', setWidth, false); };
    }, [setWidth]);
    var isMobile = useMemo(function () { return screenWidth <= mobile.max; }, [screenWidth]);
    var isTablet = useMemo(function () { return screenWidth > mobile.max && screenWidth < desktop.min; }, [screenWidth]);
    var isDesktop = useMemo(function () { return screenWidth >= desktop.min; }, [screenWidth]);
    var isAndroid = useMemo(function () { return getCurrentUserAgent() === 'Android'; }, []);
    var isIOS = useMemo(function () { return getCurrentUserAgent() === 'IOS'; }, []);
    var isChrome = useMemo(function () { return getCurrentUserAgent() === 'Chrome'; }, []);
    var isSafari = useMemo(function () { return getCurrentUserAgent() === 'Safari'; }, []);
    var isFirefox = useMemo(function () { return getCurrentUserAgent() === 'Firefox'; }, []);
    var isOpera = useMemo(function () { return getCurrentUserAgent() === 'Opera'; }, []);
    var isIE = useMemo(function () { return getCurrentUserAgent() === 'IE'; }, []);
    return useMemo(function () { return ({
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
