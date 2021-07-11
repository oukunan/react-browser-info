import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { deviceWidthBreakpoint } from './breakpoint'
import useBrowserInfo from './useBrowserInfo'

const { mobile, desktop } = deviceWidthBreakpoint

const customGlobal = global as any

it('returns only `isMobile` to be `true`', () => {
  customGlobal.innerWidth = mobile.min
  const { result } = renderHook(() => useBrowserInfo())
  const { isMobile, isTablet, isDesktop } = result.current

  expect(isMobile).toBe(true)
  expect(isTablet).toBe(false)
  expect(isDesktop).toBe(false)
})

it('returns only `isTablet` to be `true`', () => {
  // Make sure that screen size should between mobile and desktop.
  customGlobal.innerWidth = desktop.min - 1
  const { result } = renderHook(() => useBrowserInfo())

  const { isMobile, isDesktop, isTablet } = result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(true)
  expect(isDesktop).toBe(false)
})

it('returns only `isDesktop` to be `true`', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useBrowserInfo())

  const { isMobile, isDesktop, isTablet } = result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(false)
  expect(isDesktop).toBe(true)
})

it('updates innerWidth values when window resizes', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useBrowserInfo())

  expect(result.current.isMobile).toBe(false)
  expect(result.current.isDesktop).toBe(true)

  act(() => {
    customGlobal.innerWidth = mobile.min

    fireEvent(customGlobal, new Event('resize'))
  })

  expect(result.current.isMobile).toBe(true)
  expect(result.current.isDesktop).toBe(false)
})
