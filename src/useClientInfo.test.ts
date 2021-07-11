import { fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { deviceWidthBreakpoint } from './breakpoint'
import useClientInfo from './useClientInfo'

const { mobile, tablet, smallLaptop, desktop, largeScreen } =
  deviceWidthBreakpoint

const customGlobal = global as any

it('returns only `isMobile` to be `true`', () => {
  customGlobal.innerWidth = mobile.min
  const { result } = renderHook(() => useClientInfo())
  const { isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen } =
    result.current

  expect(isMobile).toBe(true)
  expect(isTablet).toBe(false)
  expect(isSmallLaptop).toBe(false)
  expect(isDesktop).toBe(false)
  expect(isLargeScreen).toBe(false)
})

it('returns only `isTablet` to be `true`', () => {
  customGlobal.innerWidth = tablet.min
  const { result } = renderHook(() => useClientInfo())

  const { isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen } =
    result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(true)
  expect(isSmallLaptop).toBe(false)
  expect(isDesktop).toBe(false)
  expect(isLargeScreen).toBe(false)
})

it('returns only `isSmallLaptop` to be `true`', () => {
  customGlobal.innerWidth = smallLaptop.min
  const { result } = renderHook(() => useClientInfo())

  const { isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen } =
    result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(false)
  expect(isSmallLaptop).toBe(true)
  expect(isDesktop).toBe(false)
  expect(isLargeScreen).toBe(false)
})

it('returns only `isDesktop` to be `true`', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useClientInfo())

  const { isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen } =
    result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(false)
  expect(isSmallLaptop).toBe(false)
  expect(isDesktop).toBe(true)
  expect(isLargeScreen).toBe(false)
})

it('returns only `isLargeScreen` to be `true`', () => {
  customGlobal.innerWidth = largeScreen.min
  const { result } = renderHook(() => useClientInfo())

  const { isMobile, isTablet, isSmallLaptop, isDesktop, isLargeScreen } =
    result.current

  expect(isMobile).toBe(false)
  expect(isTablet).toBe(false)
  expect(isSmallLaptop).toBe(false)
  expect(isDesktop).toBe(false)
  expect(isLargeScreen).toBe(true)
})

it('updates innerWidth values when window resizes', () => {
  customGlobal.innerWidth = desktop.min
  const { result } = renderHook(() => useClientInfo())

  expect(result.current.isMobile).toBe(false)
  expect(result.current.isTablet).toBe(false)
  expect(result.current.isSmallLaptop).toBe(false)
  expect(result.current.isDesktop).toBe(true)
  expect(result.current.isLargeScreen).toBe(false)

  act(() => {
    customGlobal.innerWidth = mobile.min

    fireEvent(customGlobal, new Event('resize'))
  })

  expect(result.current.isMobile).toBe(true)
  expect(result.current.isTablet).toBe(false)
  expect(result.current.isSmallLaptop).toBe(false)
  expect(result.current.isDesktop).toBe(false)
  expect(result.current.isLargeScreen).toBe(false)
})
