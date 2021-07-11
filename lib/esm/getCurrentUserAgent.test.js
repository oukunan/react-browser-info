import { clear, mockUserAgent } from 'jest-useragent-mock';
import { mockUserAgent as mock } from './mockUserAgent';
import { getCurrentUserAgent } from './getCurrentUserAgent';
afterEach(function () {
    clear();
});
it('returns userAgent equal to `Android`', function () {
    mockUserAgent(mock.android);
    var result = getCurrentUserAgent();
    expect(result).toBe('Android');
});
it('returns userAgent equal to `IOS`', function () {
    mockUserAgent(mock.ios);
    var result = getCurrentUserAgent();
    expect(result).toBe('IOS');
});
it('returns userAgent equal `Chrome`', function () {
    mockUserAgent(mock.chrome);
    var result = getCurrentUserAgent();
    expect(result).toBe('Chrome');
});
it('returns userAgent equal `Safari`', function () {
    mockUserAgent(mock.safari);
    var result = getCurrentUserAgent();
    expect(result).toBe('Safari');
});
it('returns userAgent equal `Firefox`', function () {
    mockUserAgent(mock.firefox);
    var result = getCurrentUserAgent();
    expect(result).toBe('Firefox');
});
it('returns userAgent equal `Opera`', function () {
    mockUserAgent(mock.opera);
    var result = getCurrentUserAgent();
    expect(result).toBe('Opera');
});
it('returns userAgent equal `IE`', function () {
    mockUserAgent(mock.ie);
    var result = getCurrentUserAgent();
    expect(result).toBe('IE');
});
