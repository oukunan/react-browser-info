import { clear, mockUserAgent } from 'jest-useragent-mock'
import { mockUserAgent as mock } from './mockUserAgent'
import { getCurrentUserAgent } from './getCurrentUserAgent'

afterEach(() => {
  clear()
})

it('returns userAgent equal to `Android`', () => {
  mockUserAgent(mock.android)

  const result = getCurrentUserAgent()

  expect(result).toBe('Android')
})

it('returns userAgent equal to `IOS`', () => {
  mockUserAgent(mock.ios)

  const result = getCurrentUserAgent()

  expect(result).toBe('IOS')
})

it('returns userAgent equal `Chrome`', () => {
  mockUserAgent(mock.chrome)

  const result = getCurrentUserAgent()

  expect(result).toBe('Chrome')
})

it('returns userAgent equal `Safari`', () => {
  mockUserAgent(mock.safari)

  const result = getCurrentUserAgent()

  expect(result).toBe('Safari')
})

it('returns userAgent equal `Firefox`', () => {
  mockUserAgent(mock.firefox)

  const result = getCurrentUserAgent()

  expect(result).toBe('Firefox')
})

it('returns userAgent equal `Opera`', () => {
  mockUserAgent(mock.opera)
  const result = getCurrentUserAgent()

  expect(result).toBe('Opera')
})

it('returns userAgent equal `IE`', () => {
  mockUserAgent(mock.ie)

  const result = getCurrentUserAgent()

  expect(result).toBe('IE')
})
