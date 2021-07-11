export declare type BrowserInfo = ReturnType<typeof useBrowserInfo>;
export default function useBrowserInfo(): {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isAndroid: boolean;
    isIOS: boolean;
    isChrome: boolean;
    isSafari: boolean;
    isFirefox: boolean;
    isOpera: boolean;
    isIE: boolean;
};
