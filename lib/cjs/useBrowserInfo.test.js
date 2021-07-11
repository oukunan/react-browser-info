"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_hooks_1 = require("@testing-library/react-hooks");
var breakpoint_1 = require("./breakpoint");
var useBrowserInfo_1 = __importDefault(require("./useBrowserInfo"));
var mobile = breakpoint_1.deviceWidthBreakpoint.mobile, desktop = breakpoint_1.deviceWidthBreakpoint.desktop;
var customGlobal = global;
it('returns only `isMobile` to be `true`', function () {
    customGlobal.innerWidth = mobile.min;
    var result = react_hooks_1.renderHook(function () { return useBrowserInfo_1.default(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isTablet = _a.isTablet, isDesktop = _a.isDesktop;
    expect(isMobile).toBe(true);
    expect(isTablet).toBe(false);
    expect(isDesktop).toBe(false);
});
it('returns only `isTablet` to be `true`', function () {
    // Make sure that screen size should between mobile and desktop.
    customGlobal.innerWidth = desktop.min - 1;
    var result = react_hooks_1.renderHook(function () { return useBrowserInfo_1.default(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isDesktop = _a.isDesktop, isTablet = _a.isTablet;
    expect(isMobile).toBe(false);
    expect(isTablet).toBe(true);
    expect(isDesktop).toBe(false);
});
it('returns only `isDesktop` to be `true`', function () {
    customGlobal.innerWidth = desktop.min;
    var result = react_hooks_1.renderHook(function () { return useBrowserInfo_1.default(); }).result;
    var _a = result.current, isMobile = _a.isMobile, isDesktop = _a.isDesktop, isTablet = _a.isTablet;
    expect(isMobile).toBe(false);
    expect(isTablet).toBe(false);
    expect(isDesktop).toBe(true);
});
it('updates innerWidth values when window resizes', function () {
    customGlobal.innerWidth = desktop.min;
    var result = react_hooks_1.renderHook(function () { return useBrowserInfo_1.default(); }).result;
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isDesktop).toBe(true);
    react_hooks_1.act(function () {
        customGlobal.innerWidth = mobile.min;
        react_1.fireEvent(customGlobal, new Event('resize'));
    });
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktop).toBe(false);
});
