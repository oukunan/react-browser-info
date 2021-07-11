import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { deviceWidthBreakpoint } from './breakpoint';
import useBrowserInfo from './useBrowserInfo';
var mobile = deviceWidthBreakpoint.mobile, desktop = deviceWidthBreakpoint.desktop;
var customGlobal = global;
it('returns only `isMobile` to be `true`', function () {
    customGlobal.innerWidth = mobile.min;
    var result = renderHook(function () { return useBrowserInfo(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isTablet = _a.isTablet, isDesktop = _a.isDesktop;
    expect(isMobile).toBe(true);
    expect(isTablet).toBe(false);
    expect(isDesktop).toBe(false);
});
it('returns only `isTablet` to be `true`', function () {
    // Make sure that screen size should between mobile and desktop.
    customGlobal.innerWidth = desktop.min - 1;
    var result = renderHook(function () { return useBrowserInfo(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isDesktop = _a.isDesktop, isTablet = _a.isTablet;
    expect(isMobile).toBe(false);
    expect(isTablet).toBe(true);
    expect(isDesktop).toBe(false);
});
it('returns only `isDesktop` to be `true`', function () {
    customGlobal.innerWidth = desktop.min;
    var result = renderHook(function () { return useBrowserInfo(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isDesktop = _a.isDesktop, isTablet = _a.isTablet;
    expect(isMobile).toBe(false);
    expect(isTablet).toBe(false);
    expect(isDesktop).toBe(true);
});
it('updates innerWidth values when window resizes', function () {
    customGlobal.innerWidth = desktop.min;
    var result = renderHook(function () { return useBrowserInfo(); }).result;
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isDesktop).toBe(true);
    act(function () {
        customGlobal.innerWidth = mobile.min;
        fireEvent(customGlobal, new Event('resize'));
    });
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
});
