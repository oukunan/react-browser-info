"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_useragent_mock_1 = require("jest-useragent-mock");
var mockUserAgent_1 = require("./mockUserAgent");
var getCurrentUserAgent_1 = require("./getCurrentUserAgent");
afterEach(function () {
    jest_useragent_mock_1.clear();
});
it('returns userAgent equal to `Android`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.android);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('Android');
});
it('returns userAgent equal to `IOS`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.ios);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('IOS');
});
it('returns userAgent equal `Chrome`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.chrome);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('Chrome');
});
it('returns userAgent equal `Safari`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.safari);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('Safari');
});
it('returns userAgent equal `Firefox`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.firefox);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('Firefox');
});
it('returns userAgent equal `Opera`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.opera);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('Opera');
});
it('returns userAgent equal `IE`', function () {
    jest_useragent_mock_1.mockUserAgent(mockUserAgent_1.mockUserAgent.ie);
    var result = getCurrentUserAgent_1.getCurrentUserAgent();
    expect(result).toBe('IE');
});
